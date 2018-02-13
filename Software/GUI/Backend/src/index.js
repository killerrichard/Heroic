const { app, BrowserWindow } = require('electron')

// Electron
function createWindow () {
  let win = new BrowserWindow({ width: 1000, height: 800, frame : false, resizable: false })
  win.loadURL(`file://${__dirname}/public/index.html`)
  win.on('closed', function () { win = null })
  win.webContents.openDevTools()
}

//require('electron-reload')(__dirname);

app.on('ready', (() => {
  createWindow()
}))

app.on('browser-window-created',function(e,window) {
  window.setMenu(null);
});

app.on('window-all-closed', function () {
  app.quit()
})
