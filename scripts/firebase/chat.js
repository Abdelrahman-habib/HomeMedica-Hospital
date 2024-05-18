const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { ipcMain } = require("electron");

const appMainWindow = require(path.join(
  __dirname,
  "..",
  "electron",
  "mainWindow"
)).get();
const { formatMessageSentResult, formatMessageData } = require(path.join(
  __dirname,
  "dataFormatters"
));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);

//////////////////////////////////
//*********** setters *********//
////////////////////////////////

//save a message to HOSPITALCHATS doc item's MESSAGES collection
async function saveMessage(event, text, sender, docID, localID) {
  let message = {
    text: text,
    sender: sender,
    timestamp: FieldValue.serverTimestamp(),
  };

  const result = await db
    .collection("HOSPITALCHATS")
    .doc(docID)
    .collection("MESSAGES")
    .add(message);

  if (result) {
    const message = await result.get();
    return formatMessageSentResult(true, message.data(), localID);
  } else {
    return formatMessageSentResult(false, message, localID);
  }
}

// set the hospitalPatient field as true
async function markUserAsPatient(userID) {
  const result = await db.collection("USERS").doc(userID).set(
    {
      hospitalPatient: true,
    },
    { merge: true }
  );
  if (result) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////
//*********** getters *********//
////////////////////////////////

// get user data and send it to the render process
const getUserByIDAndSend = async (userID) => {
  const doc = await db.collection("USERS").doc(userID).get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    appMainWindow.webContents.send("AddToChatSidebar", {
      id: doc.id,
      username: doc.data().username,
      profileUrl: doc.data().imageUrl,
    });
    markUserAsPatient(userID);
  }
};

//get chat contacts
const getContacts = async () => {
  const toWait = [];
  const users = await db.collection("HOSPITALCHATS").get();
  users.forEach((user) => {
    toWait.push(getUserByIDAndSend(user.id));
  });
  await Promise.all(toWait);
};

// get chat messages and send it to the render process
const getMessagesAndSend = async (chatID) => {
  const messages = await db
    .collection("HOSPITALCHATS")
    .doc(chatID)
    .collection("MESSAGES")
    .orderBy("timestamp")
    .get();
  let chatMessages = [];
  messages.forEach((message) => {
    chatMessages.push(formatMessageData(message.id, message.data()));
  });
  appMainWindow.webContents.send("addChat", {
    id: chatID,
    messages: chatMessages,
  });
};

// get chats messages
const getChats = async () => {
  const toWait = [];
  const chats = await db.collection("HOSPITALCHATS").get();
  chats.forEach((chat) => {
    toWait.push(getMessagesAndSend(chat.id));
  });
  await Promise.all(toWait);
};

//////////////////////////////////
//********** listeners ********//
////////////////////////////////

// listen to chat updates [new messages]
const ListenToChatUpdates = () => {
  const query = db.collection("HOSPITALCHATS");
  const observer = query.onSnapshot(
    (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection("HOSPITALCHATS")
          .doc(doc.id)
          .collection("MESSAGES")
          .orderBy("timestamp")
          .onSnapshot((querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((message) => {
              messages.push(formatMessageData(message.id, message.data()));
            });
            appMainWindow.webContents.send("MessageUpdate", [messages, doc.id]);
          });
      });
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
};

// listen to contacts updates [new contact(patient) started a chat]
const ListenToContactsUpdates = async () => {
  const query = db.collection("HOSPITALCHATS");
  const toWait = [];
  const observer = query.onSnapshot(
    (querySnapshot) => {
      querySnapshot.forEach((user) => {
        toWait.push(getUserByIDAndSend(user.id));
      });
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
  await Promise.all(toWait);
};

//////////////////////////////////
//************ main ***********//
////////////////////////////////

ListenToChatUpdates();
ListenToContactsUpdates();

ipcMain.handle("saveMessage", saveMessage);
ipcMain.handle("getContacts", getContacts);
ipcMain.handle("getChats", getChats);
