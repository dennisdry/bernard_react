const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      submenu: { },
      height: 500,
      width: 700,
      frame: false,
      resizable: false,
      show: false,
      wePreferences: { backgroundThrottling: false }
      //againts the process when Chrome/chromium throttling the window not in focus
    });
    this.loadURL(url);
    this.on('blur', this.onBlur.bind(this));
  }

  onBlur(){
    this.hide();
  }
}

module.exports = MainWindow;
