import {app, BrowserWindow} from 'electron';

const createWindow = () => {
    const window = new BrowserWindow({
        width : 800,
        height : 500,
        webPreferences : {
            devTools : false,
            
        },
        autoHideMenuBar : true
    })

    window.loadFile('index.html')
}


app.whenReady().then( () => {
    createWindow()

    if(BrowserWindow === null) createWindow()
})