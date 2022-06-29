// Gets the bots ping and edits the button
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information


const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = { // Exports from the file
	data: {
		name: 'getBotPing',
	},

	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('returnBotPing')
					.setLabel('Return')
					.setDisabled(false)
					.setStyle('SUCCESS'),
			);
		const embed = new MessageEmbed()
			.setTitle('Bot Data')
			.setDescription(`Latency is \`${Date.now() - interaction.createdTimestamp}ms\`\nAPI Latency is \`${Math.round(client.ws.ping)}ms\``)
			.setColor('#2f3136');
		interaction.update({ embeds: [embed], components: [row], ephemeral: true });
	},
};