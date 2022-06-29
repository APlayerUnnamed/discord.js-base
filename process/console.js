// Console Logging
// Logs events in the process
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

const { v4: uuidv4 } = require('uuid');

const fs = require('fs');

try { fs.mkdirSync('logs'); }
catch {}
try { fs.renameSync('logs/latest.log', `logs/${uuidv4()}`); }
catch {}
try { fs.copyFileSync('bot.log', 'logs/latest.log'); }
catch {}

// The bots log file
const logFile = fs.createWriteStream('bot.log', { flags: 'w' });
// The processes stdout https://nodejs.org/api/process.html#processstdout
const logStdout = process.stdout;

console.log = function(arg1, arg2 = 'Info') {
	logFile.write(`[${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}] ${arg2}: ${arg1}\n`);
	logStdout.write(`[${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}] ${arg2}: ${arg1}\n`);
};
console.error = console.log;

console.log(`This log is from ${dateFormated}.`, 'Debug');