// Says when bot is "ready"
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot is ready! ${client.user.tag}`);
	},
};
