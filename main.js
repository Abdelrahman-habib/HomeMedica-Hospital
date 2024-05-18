const { app, BrowserWindow } = require("electron");
const path = require("path");
const appMainWindow = require(path.join(
  __dirname,
  "scripts",
  "electron",
  "mainWindow"
));

let mainWindow = null;

app.whenReady().then(() => {
  mainWindow = appMainWindow.create();
  require(path.join(__dirname, "scripts", "firebase", "init"));
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = appMainWindow.create();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
