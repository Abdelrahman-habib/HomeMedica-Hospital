const { BrowserWindow } = require("electron");
const path = require("path");

// Define the main window.
let mainWindow;

// Create the main window.
function create() {
  mainWindow = new BrowserWindow({
    title: "HomeMedica",
    width: 1400,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadFile("html/HomeMedica/ltr/app-chat.html").then(() => {
    mainWindow.show();
  });
  console.log("created main window");
  return mainWindow;
}

// Get the main window object.
function get() {
  return mainWindow;
}

// Export the publicly available functions.
module.exports = { create, get };
