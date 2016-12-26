
var electron = require('electron');
var app = electron.app;
//const menu = electron.Menu;

/*app.on('window-all-closed', () =>{
  if (process.platform != 'darwin') {
    app.quit();
 }
});*/

var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //frame: false,
    //fullscreen :true,
  //  kiosk:true,
    //closable:true,
    //toolbar: false
  });
//mainWindow.setTitle("Electron Prueba");
//mainWindow.setMenu(null);
mainWindow.loadURL('file://' + __dirname + '/app/index.html');
//mainWindow.loadURL('http://www.rosselot.cl/rent-a-car/?op=publicidad');

/*mainWindow.on('closed', function()  {
    console.log("---- Bye Bye Electron ----");
    mainWindow = null;
    app.quit();
  });*/

});
