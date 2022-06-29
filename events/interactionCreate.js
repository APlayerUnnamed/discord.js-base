// Command/button handeler
// Runs on the corrosponding event
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName);

			if (!command) return;

			try {
				await command.execute(interaction);
			}
			catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
		if (interaction.isButton()) {
			const button = client.buttons.get(interaction.customId);
			if (!button) return await interaction.reply({ content: 'This interaction failed because no button handeler was found! Please report if this persists!', ephemeral: true });
			try {
				await button.execute(interaction);

			}
			catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this button event!', ephemeral: true });
			}

		}
	},

};