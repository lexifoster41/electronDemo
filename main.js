/**
 * Importing two Electron modules with CommonJS module syntax.
 *
 * app controls application's event lifecycle
 * BrowserWindow creates/manages app windows
 */
const { app, BrowserWindow } = require('electron')

/**
 * Loads web page into a new BrowserWindow instance.
 */
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

/**
 * In Electron, BrowserWindow can only be created after the app's module's 'ready' event
 * is fired... Thus, we will use whenReady() API and call createWindow() once its promise
 * if fulfilled.
 */
app.whenReady().then(() => {
    createWindow()

    // Activate app when no windows are available, should open new window.
    // Only listen for 'active' events from the app because windows cannot be created before the 'ready' event.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

/**
 * Quit the application when all windows are closed, if user is NOT on macOS
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})