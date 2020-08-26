const electron = require("electron");
const { app, BrowserWindow, session } = electron;
const os = require("os");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 960,
		height: 540,
		minWidth: 960,
		minHeight: 540,
		webPreferences: {
			nodeIntegration: true,
			devTools: true,
		},
	});

	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`,
	);
	mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("ready", async () => {
	await session.defaultSession.loadExtension(
		path.join(
			os.homedir(),
			"AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\4.8.2_0",
		),
	);
	await session.defaultSession.loadExtension(
		path.join(
			os.homedir(),
			"AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.17.0_0",
		),
	);
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
