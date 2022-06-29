// Returns to the original message
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information


const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = { // Exports from the file
	data: {
		name: 'returnBotPing',
	},

	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('getBotPing')
					.setLabel('View Ping')
					.setStyle('PRIMARY'),
			);
		const embed = new MessageEmbed()
			.setTitle('Pong!')
			.setDescription('🏓\n⠀⠀⠀⠀⠀⠀⠀⠀ ⠀🏓')
			.setColor('#2f3136');
		interaction.update({ embeds: [embed], components: [row], ephemeral: true });
	},
};