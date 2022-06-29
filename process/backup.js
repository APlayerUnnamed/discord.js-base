// Backs up data in the data directory
// Runs as part of init
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

const fs = require('fs');
const path = require('path');
const time = Date.now();

const fileDir = path.join(cwd, 'data');
const backupPath = path.join(path.join(cwd, 'backups'), time.toString());

try { fs.mkdirSync(path.join(cwd, 'backups')); }
catch {}

try {
	fs.mkdirSync(backupPath);
}
catch (eerr) {
	console.log(eerr, 'Error');
}


files = fs.readdirSync(fileDir);

for (const file of files) {
	try {
		fs.copyFileSync(path.join(fileDir, file), path.join(backupPath, file));
	}
	catch (err) {
		console.log(err, 'Error');
	}
}