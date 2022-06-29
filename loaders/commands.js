// Part of the command loader
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

const fs = require('fs');
const path = require('path');
const { Collection } = require('discord.js');

global.client.commands = new Collection();

const commandsPath = path.join(cwd, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
require('./deploy-commands');
require('./buttons');
