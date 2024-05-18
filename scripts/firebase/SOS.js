const path = require("path");
const { app } = require(path.join(__dirname, "init"));
const { getFirestore } = require("firebase-admin/firestore");
const { ipcMain, Notification } = require("electron");

const appMainWindow = require(path.join(
  __dirname,
  "..",
  "electron",
  "mainWindow"
)).get();
const { formatSOSData } = require(path.join(__dirname, "dataFormatters"));

//////////////////////////////////
//********** variables ********//
////////////////////////////////
const db = getFirestore(app);

//////////////////////////////////
//*********** getters *********//
////////////////////////////////

// get only SOS from three days off of today
const getSOSsList = async () => {
  const SOSs = await db
    .collection("SOS")
    .where("responded", "==", false)
    .orderBy("timeStamp")
    .get();
  if (SOSs.empty) {
    return [];
  }
  let formattedData = [];
  SOSs.forEach((SOS) => {
    formattedData.push(formatSOSData(SOS));
  });
  return formattedData;
};

//////////////////////////////////
//*********** setters *********//
////////////////////////////////

// delete SOS call al
async function markSOSAsResponded(event, SOSID) {
  const result = await db.collection("SOS").doc(SOSID).delete();
  if (result) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////
//********** listeners ********//
////////////////////////////////

// listen to SOS updates
const ListenToSOSUpdates = () => {
  db.collection("SOS")
    .where("responded", "==", false)
    .onSnapshot(
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            appMainWindow.webContents.send("newSOS", formatSOSData(change.doc));
            if (appMainWindow.isMinimized()) {
              new Notification({
                title: "SOS Call",
                body: `Patient "${
                  change.doc.data().username
                }" sent an SOS call. \n see SOS page for more details.`,
              }).show();
            }
          }
          if (change.type === "removed") {
            appMainWindow.webContents.send("SOSDeleted");
          }
        });
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
};

//////////////////////////////////
//************ main ***********//
////////////////////////////////

ListenToSOSUpdates();

ipcMain.handle("getSOSsList", getSOSsList);
ipcMain.handle("markSOSAsResponded", markSOSAsResponded);
