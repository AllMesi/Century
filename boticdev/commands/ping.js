const Command = require('../structures/Command')
const discord = require('discord.js')

module.exports = new Command({
    name: "ping",
    description: "when pong",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const embed = new discord.MessageEmbed()
        .setTitle('...')
        .setDescription('Pinging...')
        const newembed = new discord.MessageEmbed()
        .setTitle('Pong! :ping_pong:')
        .setDescription(`Ping: ${client.ws.ping}ms`/*\nMessagePing: ${msg.createdTimestamp - message.createdTimestamp}ms`*/)
        .setTimestamp();
        const msg = message.reply({ embeds: [embed] }).then(msg => {setTimeout(() => msg.delete(), client.ws.ping)})
        // msg.edit(`Pong! :ping_pong:\nPing: ${client.ws.ping}ms\nMessagePing: ${msg.createdTimestamp - message.createdTimestamp}ms`)
        message.reply({ embeds: [newembed] })
    }

})