'use strict;'
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
// Keep window state after close
const windowStateKeeper = require('electron-window-state');
// Chect for automatic updates
const GhReleases = require('electron-gh-releases');
let options = {
	repo: 'Breta01/MemoryKing',
	currentVersion: app.getVersion()
};

const updater = new GhReleases(options);

// `status` returns true if there is a new update available
updater.check((err, status) => {
	if (!err && status) {
		// Download the update
		updater.download();
	}
});

// When an update has been downloaded
updater.on('update-downloaded', (info) => {
	// Restart the app and install the update
	// @TODO add warning to user that it will restart
	updater.install();
});

// Access electrons autoUpdater
updater.autoUpdater;

// Reloading on changes, maybe can be deleted
// require('electron-reload')(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
	// Load the previos state with fallback to defaults
	let mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800
	});

    // Create the browser window.
    mainWindow = new BrowserWindow({
		'x': mainWindowState.x,
		'y': mainWindowState.y,
		'width': mainWindowState.width,
		'height': mainWindowState.height,
		autoHideMenuBar: true
	});

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    if (process.env.NODE_ENV === 'development')
        mainWindow.webContents.openDevTools();
    /** @TODO React dev tools depends on the location of google chrom extension,
	*   location shoudl be changed
    *   more here: https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md
    *   BrowserWindow.addDevToolsExtension("\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\0.15.4_0")
    **/

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		mainWindow = null;
	});

	// Update the window state automatically
	mainWindowState.manage(mainWindow);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});
