// Process events
// Defines the process.on events
// MIT License - Copyright (c) 2022 APlayerUnnamed
// View LICENSE for more information

// On error
process.on('uncaughtException', (err) => {
	console.error(`Uncaught Exception - ${err}`, 'Error');
	console.log(`Stack Trace from ${err}\n${err.stack}`, 'Error');
	console;
	process.exit(1); // mandatory (as per the Node.js docs)
});

// On exit
process.on('exit', (code) => {
	console.log(`Process Exiting - Exit Code ${code}`);
});

// On warning
process.on('warning', (warning) => {
	console.warn(warning.name); // Print the warning name
	console.warn(warning.message); // Print the warning message
	console.warn(warning.stack); // Print the stack trace
});

