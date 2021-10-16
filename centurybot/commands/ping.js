const Command = require("../structures/Command")

module.exports = new Command({
    name: "ping",
    description: "show s ping",

    async run(message, args, client) {
        const msg = await message.reply(`pinging...`);

        msg.edit(`Pong! :ping_pong: \nPing: ${client.ws.ping}ms\nMessage Ping ${msg.createdTimestamp - message.createdTimestamp}ms`)
    }
});