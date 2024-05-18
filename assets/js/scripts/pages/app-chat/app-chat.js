let chats = {};
let opened_chat = "";
window.firebase.getContacts();
window.firebase.getChats();
function genChatSidebarItem(chatter) {
  return `
    <li data-chatter="${chatter.id}">
    <div class="d-flex align-items-center">
      <div class="avatar m-0 mr-50 bg-white">
        <img class="user-image" src="${
          chatter.profile
        }" height="36" width="36" alt="user image">
        <span class="avatar-status-away"></span>
      </div>
      <div class="chat-sidebar-name">
        <h6 class="mb-0 username">${chatter.username}</h6>
        <span class="text-muted">${""}</span>
      </div>
    </div>
  </li>
  `;
}

function append_chatter_message(messeage, profile) {
  if ($(".chat-wrapper .chat:last-child").hasClass("chat-left")) {
    $(".chat-wrapper .chat-content .chat:last-child .chat-body").append(
      `
            <div class="chat-message">
                <p>${messeage.text}</p>
                <span class="chat-time">${messeage.timestamp}</span>
            </div>
    `
    );
  } else {
    $(".chat-wrapper .chat-content").append(
      `
    <div class="chat chat-left">
        <div class="chat-avatar">
            <a class="avatar m-0">
                <img src="${profile}" alt="avatar" height="36" width="36">
            </a>
        </div>
        <div class="chat-body">
            <div class="chat-message">
                <p>${messeage.text}</p>
                <span class="chat-time">${messeage.timestamp}</span>
            </div>
        </div>
    </div>
    `
    );
  }
}
function append_hosp_message(messeage) {
  if ($(".chat-wrapper .chat:last-child").hasClass("chat-right")) {
    $(".chat-wrapper .chat-content .chat:last-child .chat-body").append(
      `
              <div class="chat-message">
                  <p>${messeage.text}</p>
                  <span class="chat-time">${messeage.timestamp}</span>
              </div>
              `
    );
  } else {
    $(".chat-wrapper .chat-content").append(
      `
              <div class="chat chat-right">
                  <div class="chat-avatar">
                    <div class="avatar bg-success">
                        <span class="avatar-content">CH</span>
                    </div>
                  </div>
                  <div class="chat-body">
                      <div class="chat-message">
                          <p>${messeage.text}</p>
                          <span class="chat-time">${messeage.timestamp}</span>
                      </div>
                  </div>
              </div>
              `
    );
  }
}

function load_chat(chatterID, profile, username, messeages) {
  $(".current-chatter-profile-image").attr("src", profile);
  $(".current-chatter-username").text(username);
  $(".chat-wrapper .chat-content").html("");
  $(".view-patient-medical-history").attr(
    "href",
    `patient-prescriptions.html?patientId=${chatterID}`
  );
  messeages.forEach((message) => {
    if (message.sender != "hosp") {
      append_chatter_message(message, profile);
    } else {
      append_hosp_message(message);
    }
  });
  window.firebase
    .getPatient(chatterID)
    .then((patient) => {
      console.log(patient);
      if (patient[4]) {
        $(".patient-email").html(patient[4]).parent().removeClass("hidden");
      }
      if (patient[3]) {
        $(".patient-phone").html(patient[2]).parent().removeClass("hidden");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  window.firebase
    .getPatientPrescriptions(chatterID)
    .then((medicalHistory) => {
      if (medicalHistory) {
        if (medicalHistory[0].patientAge) {
          $(".patient-age")
            .html(medicalHistory[0].patientAge)
            .parent()
            .removeClass("hidden");
        } else {
          $(".patient-age").html().parent().addClass("hidden");
        }
        if (medicalHistory[0].patientGender) {
          $(".patient-gender")
            .html(medicalHistory[0].patientGender)
            .parent()
            .removeClass("hidden");
        } else {
          $(".patient-gender").html().parent().addClass("hidden");
        }
        let histoy = "";
        medicalHistory.forEach((prescription) => {
          histoy += `<li>[${prescription.date}] ${prescription.diagnosis}</li>`;
        });
        $(".patient-medical-history").html(histoy);
      } else {
        $(".patient-medical-history").html("nothing yet.");
        $(".patient-age").html().parent().addClass("hidden");
        $(".patient-gender").html().parent().addClass("hidden");
      }
    })
    .catch((error) => {
      $(".patient-medical-history").html("nothing yet.");
      $(".patient-age").parent().addClass("hidden");
      $(".patient-gender").parent().addClass("hidden");
      console.log(error);
    });
}

function reload_chat(messeages) {
  $(".chat-wrapper .chat-content").html("");
  messeages.forEach((message) => {
    if (message.sender != "hosp") {
      append_chatter_message(
        message,
        $(".current-chatter-profile-image").attr("src")
      );
    } else {
      append_hosp_message(message);
    }
  });
}

function loadChatter(chatter) {
  let html = genChatSidebarItem(chatter);
  $(`.chat-patients-list [data-chatter='${chatter.id}']`).remove();
  $(`.chat-patients-list`).append(html);
}

$(".chat-sidebar-list-wrapper ul").on("click", "li", function () {
  opened_chat = $(this).data("chatter");
  load_chat(
    $(this).data("chatter"),
    $(this).find(".user-image").attr("src"),
    $(this).find(".username").text(),
    chats[$(this).data("chatter")]
  );
  $(".chat-container").scrollTop($(".chat-container > .chat-content").height());
});

// Add message to chat
function chatMessagesSend(source) {
  let text = chatMessageSend.val();
  if (text != "") {
    let message = {
      text: text,
      timestamp: new Date().toLocaleTimeString(),
    };
    append_hosp_message(message);
    chatMessageSend.val("");
    chatContainer.scrollTop($(".chat-container > .chat-content").height());
    save_message_to_firestore(message.text);
  }
}

//adds chat to chats list
window.firebase.handleAddChat((event, chat) => {
  chats[chat.id] = chat.messages;
});

//adds an item(a user image & name) in the contacts menu
window.firebase.handleAddToChatSidebar((event, contact) => {
  loadChatter({
    id: contact.id,
    username: contact.username,
    profile: contact.profileUrl,
  });
});

//handle incoming new message
window.firebase.handleMessageUpdate((event, data) => {
  console.log(data);
  let messages,
    chatID = data;
  // update local messages
  chats[chatID] = messages;

  // check if incoming message is in the currently opened chat
  if (chatID === opened_chat) {
    // if yes relod to display new messages
    reload_chat(messages);
  }
});

async function save_message_to_firestore(text) {
  let messageChat = opened_chat;
  const result = await window.firebase.saveMessage(
    text,
    "hosp",
    messageChat,
    "1"
  );
  if (result.success) {
    chats[messageChat].push(result.message);
    //ui sent result.localID
  } else {
    console.error("Error sending message");
    // ui failed result.localID
  }
}

new EmojiPicker({
  trigger: [
    {
      selector: ".emojiPicker",
      insertInto: ".chat-message-send",
    },
  ],
  closeButton: true,
  specialButtons: "#5a8dee",
});

const loadHospitalInfo = () => {
  window.firebase
    .getHospitalInfo()
    .then((info) => {
      $("#hospital-initials, #hopital-avatar").text(
        info.name
          .match(/(^\S\S?|\b\S)?/g)
          .join("")
          .match(/(^\S|\S$)?/g)
          .join("")
          .toUpperCase()
      );
      $("#hospital-name").text(info.name);
      $("#hospital-about").text(info.about);
      $("#hospital-email").text(info.email);
      $("#hospital-phone").text(info.phone);
    })
    .catch((error) => {});
};
loadHospitalInfo();
