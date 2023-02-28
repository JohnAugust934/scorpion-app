const electron = require('electron')

const { app, BrowserWindow } = require ('electron')

function createWindow () {
    // Criar uma janela de navegação
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //carregar o index.html do aplicativo
    win.loadFile('index.html')
}

app.on('ready', createWindow)