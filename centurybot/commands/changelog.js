const Command = require('../structures/Command')
const discord = require('discord.js')

module.exports = new Command({
    name: "changelog",
    description: "a log that says the changes",

    async run(message, args, client) {
        const embed = new discord.MessageEmbed({ timestamp: new Date() })
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setTitle('Changelog')
        .setDescription('**- Added slash commands**');

        message.reply({ embeds: [embed] })
    }

})