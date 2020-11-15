const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(MenuApp);

    Menu.setApplicationMenu(mainMenu);
});

const MenuApp = [
    {
        label:'Data',
        submenu: [
            {
                label:'Kepala Keluarga'
            },
            {
                label:'Member Keluarga'
            }
        ]
    },
    {
        label:'Settings',
        submenu: [
            {
                label:'API',
                submenu: [
                    {
                        label:'Kepala Keluarga'
                    },
                    {
                        label:'Member Keluarga'
                    }
                ]
            },
            {
                label:'Keluar',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];