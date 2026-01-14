const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  launchGame: (playerName, javaPath) => ipcRenderer.invoke('launch-game', playerName, javaPath),
  closeWindow: () => ipcRenderer.invoke('window-close'),
  minimizeWindow: () => ipcRenderer.invoke('window-minimize'),
  saveUsername: (username) => ipcRenderer.invoke('save-username', username),
  loadUsername: () => ipcRenderer.invoke('load-username'),
  saveJavaPath: (javaPath) => ipcRenderer.invoke('save-java-path', javaPath),
  loadJavaPath: () => ipcRenderer.invoke('load-java-path'),
  onProgressUpdate: (callback) => {
    ipcRenderer.on('progress-update', (event, data) => callback(data));
  }
});
