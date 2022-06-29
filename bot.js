// This is the main bot's class
// It serves as our entery point
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

// Import discord.js
const { Client, Intents } = require('discord.js');
// Import our token and client id
const { token, profilePicture } = require('./config.json');
// Import file system
global.fs = require('fs');
global.path = require('path');

global.profilePicture = profilePicture;

// An formated date
global.dateFormated = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

global.cwd = __dirname;
require('./process/console');
require('./process/backup');
require('./process/events');

/*
try {
    fs.mkdirSync('./backups').catch()
    fs.copyFile('./log.txt')
}*/

global.client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

require('./loaders/events');
require('./loaders/commands');
client.login(token);
require('./process/exit');

