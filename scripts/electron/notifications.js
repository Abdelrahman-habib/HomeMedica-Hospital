const path = require("path");
const { Notification } = require("electron");

const appMainWindow = require(path.join(__dirname, "mainWindow")).get();

const _formatNotification = (options) => {
  if (options.type) {
    delete options.type;
  }
  const defaultOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  return { ...defaultOptions, ...options };
};

const _sendErrorNotification = (title, body, options) => {
  appMainWindow.webContents.send(
    "errorNotification",
    title,
    body,
    _formatNotification(options)
  );
};
const _sendWarningNotification = (title, body, options) => {
  appMainWindow.webContents.send(
    "warningNotification",
    title,
    body,
    _formatNotification(options)
  );
};

const _sendSuccessNotification = (title, body, options) => {
  appMainWindow.webContents.send(
    "successNotification",
    title,
    body,
    _formatNotification(options)
  );
};

const _sendInfoNotification = (title, body, options) => {
  appMainWindow.webContents.send(
    "infoNotification",
    title,
    body,
    _formatNotification(options)
  );
};
const sendAppNotification = (title, body, options) => {
  switch (options.type) {
    case "error":
      _sendErrorNotification(title, body, options);
      break;
    case "warning":
      _sendWarningNotification(title, body, options);
      break;
    case "success":
      _sendSuccessNotification(title, body, options);
      break;
    default:
      _sendInfoNotification(title, body, options);
      break;
  }
};

//sends a basic windows notification
const sendWinNotification = (title, body) => {
  if (Notification.isSupported()) {
    new Notification({
      title: title,
      body: body,
    }).show();
  }
};

const sendNotification = (title, body, windows, options) => {
  if (windows) {
    sendWinNotification(title, body);
  } else {
    sendAppNotification(title, body, options);
  }
};

module.exports.sendNotification = sendNotification;
module.exports.sendWinNotification = sendWinNotification;
module.exports.sendAppNotification = sendAppNotification;
