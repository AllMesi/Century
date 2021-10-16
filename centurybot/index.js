const config = require('../config');
const Client = require("./structures/Client")
const client = new Client();
// client.commands = new discord.Collection();
const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const Command = require('./structures/Command');

fs.readdirSync("./centurybot/commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
	/**
	 * @type {Command}
	 */
	const command = require(`./commands/${file}`)
	console.log(`Fetched command: ${command.name}`)
	client.commands.set(command.name, command)
})

client.on('ready', () => {
	console.log('CenturyBot is online!')
	setStatus('CenturyBot', 'idle')
});

client.on("messageCreate", message => {
	// console.log(`Message from: ${message.author.tag}: ${message.content}`);
	if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/)

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} isnt valid!`);

	command.run(message, args, client)

});

function setStatus(name = "default", status = "online") {
	client.user.setPresence({ activities: [{ name: name }], status: status });
	console.log(`CenturyBot (setStatus fetched - Name: ${name}, Status: ${status})`);
}

client.login(config.token);