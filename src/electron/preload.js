// preload.js
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  runCommand: (input) => ipcRenderer.invoke('run-command', input),
});
console.log("electronAPI:", window.electronAPI);
