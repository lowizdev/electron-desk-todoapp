const {app, BrowserWindow, ipcMain, remote} = require('electron');
const fs = require('fs');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
}

ipcMain.on('btnnewnoteclick', function(event, arg){
    win.loadFile('newnote.html');
});

ipcMain.on('btnsaveclick', function(event, arg){

    console.log(arg);
    win.loadFile('newnote.html');
});

app.whenReady().then(createWindow);

