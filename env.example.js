const path = require('path');

process.env = {
	SIMPLE_DESKTOPS_DOWNLOADS_FOLDER: path.join(__dirname, './data', 'simple_desktops'),
	SIMPLE_DESKTOPS_CHECK_FOR_UPDATES: false,
	...process.env,
};
