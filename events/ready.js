// Says when bot is "ready"
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user
			.setAvatar(profilePicture)
			.catch((err) => {
				console.log('Set profile picture failed! ' + err, 'WARN');
			});
		console.log(`Bot is ready! ${client.user.tag}`);
	},
};
