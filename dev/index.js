var express = require('express');
var exapp = express();
const electron = require('electron');
const path =  require('path');
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window')
const { Menu, ipcMain ,BrowserWindow, app } = electron;

let mainWindow;
let tray;

exapp.set('port', (process.env.PORT || 5000));

exapp.use(express.static(__dirname + '/public'));

// views is directory for all template files
exapp.set('views', __dirname + '/views');
exapp.set('view engine', 'ejs');

exapp.get('/', function(request, response) {
  response.render('pages/index');
});

exapp.listen(exapp.get('port'), function() {
  console.log('Node app is running on port', exapp.get('port'));
});

app.on('ready', () => {
  //app.dock.hide();
console.log("APP IS READY");
  mainWindow = new MainWindow(`http://127.0.0.1:8888/`);
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname,`./src/assets/${iconName}`);
  tray = new TimerTray(iconPath, mainWindow);
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(mainMenu);
});

ipcMain.on("app:ready", (event, signal) => {
  if(signal > tray.messageListLength && parseInt(signal) !== 0){
  tray.messageListLength = signal;
tray.setTitle("!");
}
});

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      /* (() => {
        if (process.platform === 'darwin') {
          return 'Command + Q';
        }else{
          return 'Ctrl+Q';
        }
      })(), */
      click(){
        app.quit();
        }
      }
    ]
  }
];

if (process.platform === 'darwin'){
  menuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'DEV_View',
    submenu: [
      { role: 'reload' }, //shortcut for re-adding devtool
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}
