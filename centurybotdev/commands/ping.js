const Command = require('../structures/Command')

module.exports = new Command({
    name: "ping",
    description: "latency",

    async run(message, args, client) {
        const msg = await message.reply('Pinging...')
        msg.edit(`Pong! :ping_pong:\nPing: ${client.ws.ping}ms\nMessagePing: ${msg.createdTimestamp - message.createdTimestamp}ms`)
    }

})