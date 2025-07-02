import { BrowserWindow, app } from "electron";
import path from "path";
import { fileURLToPath } from 'url';


app.on("ready", () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    // const indexPath = path.join(__dirname, "..", "..", "dist-react", "index.html");


    // mainWindow.loadFile(path.join(indexPath));
    mainWindow.loadFile(path.join(__dirname, '..', '..','dist-react', 'index.html'));
    // mainWindow.loadURL('http://localhost:3000');

    // mainWindow.webContents.openDevTools();


})