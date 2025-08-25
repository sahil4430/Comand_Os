import { BrowserWindow, app, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from 'url';
// import Interpretcommand from "../../Backend/commandInterpreter.js";
import launchApp from "../../Backend/childProcess/open.js";
import setVolume from "../../Backend/childProcess/Volume.js";



app.on("ready", () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        preload: path.join(__dirname, 'preload.js'),
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
ipcMain.handle('run-command', async (event, terminalInput) => {
  launchApp(terminalInput);
  setVolume(terminalInput);
  return `Launched: ${terminalInput}`;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});