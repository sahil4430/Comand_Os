import { BrowserWindow, app, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from 'url';
import Interpretcommand from "../../Backend/commandInterpreter.js";
import SearchFile from "../../Backend/childProcess/txtSearch.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);


app.on("ready", () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });
    // const indexPath = path.join(__dirname, "..", "..", "dist-react", "index.html");
    // mainWindow.loadFile(path.join(indexPath));
    mainWindow.loadFile(path.join(__dirname, '..', '..','dist-react', 'index.html'));
    // mainWindow.loadURL('http://localhost:3000');
    // mainWindow.webContents.openDevTools();
})

ipcMain.handle('run-command', async(event,input)=>{
    const result = Interpretcommand(input);
    if (result.action === 'search'){
        return await SearchFile(result.query);
    }
    return "sorry"
})