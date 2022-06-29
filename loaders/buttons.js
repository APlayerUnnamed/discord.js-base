// Load button events
// Runs as part of init
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

const { Collection } = require('discord.js');

const buttonsPath = path.join(cwd, 'buttons');
const buttonFiles = fs.readdirSync(buttonsPath).filter(file => file.endsWith('.js'));

global.client.buttons = new Collection();

for (const file of buttonFiles) {
	const filePath = path.join(buttonsPath, file);
	const button = require(filePath);
	client.buttons.set(button.data.name, button);

}
