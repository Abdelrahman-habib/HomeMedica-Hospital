let wasOffline = false;

// Online/Offline Event Detection
const reportOnlineStatus = () => {
  if (!navigator.onLine) {
    wasOffline = true;
    toastr.warning(
      `All of our app functionality requires an active internet connection. please make sure you are connected to the internet.`,
      "you are currently offline",
      {
        timeOut: 10000,
        progressBar: true,
        extendedTimeOut: "1000",
        closeButton: true,
      }
    );
  } else {
    if (wasOffline) {
      toastr.success(`your internet connection was restored.`, "Back online", {
        timeOut: 3000,
        progressBar: true,
        extendedTimeOut: "1000",
        closeButton: true,
      });
    }
  }
};
////////////////////////////////////

// notifications events handlers
window.firebase.successNotification((event, title, body, options) => {
  toastr.success(body, title, options);
});
window.firebase.errorNotification((event, title, body, options) => {
  toastr.error(body, title, options);
});
window.firebase.warningNotification((event, title, body, options) => {
  toastr.warning(body, title, options);
});
window.firebase.infoNotification((event, title, body, options) => {
  toastr.info(body, title, options);
});
////////////////////////////////////

// SOS events Handlers mainly for badges
window.firebase.handleNewSOS((event, SOSData) => {
  if (sessionStorage.SOSBadgeNumber) {
    sessionStorage.SOSBadgeNumber = parseInt(sessionStorage.SOSBadgeNumber) + 1;
  } else {
    sessionStorage.SOSBadgeNumber = 1;
  }
  // SOS menu item badge
  let SOSBadge = $('a[href="SOS.html"] .badge');
  // set badge number
  SOSBadge.text(sessionStorage.SOSBadgeNumber);
  // show badge if hidden
  SOSBadge.removeClass("hidden");
  toastr.error(
    `Patient "${SOSData[3]}" sent an SOS call. \n see SOS page for more details.`,
    "SOS Call",
    {
      timeOut: 5000,
    }
  );
});
window.firebase.handleSOSDeleted((event) => {
  if (sessionStorage.SOSBadgeNumber) {
    sessionStorage.SOSBadgeNumber = parseInt(sessionStorage.SOSBadgeNumber) - 1;
  } else {
    sessionStorage.SOSBadgeNumber = 0;
  }
  // SOS menu item badge
  let SOSBadge = $('a[href="SOS.html"] .badge');
  // set badge number
  SOSBadge.text(sessionStorage.SOSBadgeNumber);
  // show badge if hidden
  SOSBadge.removeClass("hidden");
});

window.firebase.appointment((event, appointment) => {
  if (appointment.end >= Date.now()) {
    if (sessionStorage.appointmentsBadgeNumber) {
      sessionStorage.appointmentsBadgeNumber =
        parseInt(sessionStorage.appointmentsBadgeNumber) + 1;
    } else {
      sessionStorage.appointmentsBadgeNumber = 1;
    }
    // SOS menu item badge
    let appointmentsBadge = $('a[href="app-appointments.html"] .badge');
    // set badge number
    appointmentsBadge.text(sessionStorage.appointmentsBadgeNumber);
    // show badge if hidden
    appointmentsBadge.removeClass("hidden");
  }
});
////////////////////////////////////

/// update notification badges and add report online status event listners
$(function () {
  $('a[href="app-chat.html"] .badge').remove();
  // set badge number
  if (sessionStorage.SOSBadgeNumber > 0) {
    // SOS menu item badge
    let SOSBadge = $('a[href="SOS.html"] .badge');

    SOSBadge.text(sessionStorage.SOSBadgeNumber);
    // show badge if hidden
    SOSBadge.removeClass("hidden");
  }

  if (sessionStorage.appointmentsBadgeNumber > 0) {
    // appointments menu item badge
    let appointmentsBadge = $('a[href="app-appointments.html"] .badge');
    // set badge number
    appointmentsBadge.text(sessionStorage.appointmentsBadgeNumber);
    // show badge if hidden
    appointmentsBadge.removeClass("hidden");
  }
  // add report online status event listners
  window.addEventListener("online", reportOnlineStatus);
  window.addEventListener("offline", reportOnlineStatus);
  // report intial online status
  reportOnlineStatus();
});
