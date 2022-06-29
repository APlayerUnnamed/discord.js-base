// On bot exit event
// Runs when the bot is about to exit
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information


exitQ = async function() {
	const prompt = require('async-prompt');
	const q = await prompt('');
	if (q.toLowerCase() === 'exit') {
		process.exit(0);
	}
	else {
		exitQ();
	}
};
exitQ();