const electron = require('electron');
const app = electron.app;
const isDev = require('electron-is-dev');
require('electron-reload');
const BrowserWindow = electron.BrowserWindow;

const path = require('path');

let mainWindow;

function createWindow() {
  // LAUNCH APP @ TOP-RIGHT, FULL HEIGHT
  const display = electron.screen.getPrimaryDisplay();
  const area = display.workAreaSize;
  const height = area.height;
  const width = display.bounds.width;
  mainWindow = new BrowserWindow({
    height,
    width: 600,
    x: width - 600,
    y: 0,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
