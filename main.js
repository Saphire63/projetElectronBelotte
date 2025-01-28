const { app, BrowserWindow } = require('electron')
import { creerTableau } from './fonctionsJS/tableau';
require('electron-reload')(__dirname);
const createWindow = () => {
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
        nodeIntegration: true // Important si tu veux utiliser Node.js dans tes fichiers HTML
    }
})

win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    const nvTab = document.getElementById("nvTab");
    if (nvTab) {
        nvTab.addEventListener("click", () => {
            // Appelle la fonction 'creerTableau' lorsque le bouton est cliqué
            creerTableau(2,3);
        });
    }
})

