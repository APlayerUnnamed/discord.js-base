// The ping command
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information


const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = { // Exports from the file
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

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
			.setDescription('🏓\n⠀⠀ ⠀⠀⠀⠀⠀⠀⠀🏓')
			.setColor('#2f3136');

		try {
			return await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
		}
		catch (er) {
			try {
				console.error(er);
				return await interaction.followUp({ content:'Something went wrong!', ephemeral: true });
			}
			catch (errr) {
				console.error(er);
				return await interaction.reply({ content:'Something went wrong!', ephemeral: true });
			}
		}
	},
};