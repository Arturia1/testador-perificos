const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    // Remove a barra de menus do navegador para parecer um app real
    autoHideMenuBar: true, 
    icon: path.join(__dirname, 'icon.ico') 
  });

  // Em desenvolvimento, ele carrega o servidor do Vite
  win.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});