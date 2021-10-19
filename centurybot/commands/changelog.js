const Command = require('../structures/Command')
const discord = require('discord.js')

module.exports = new Command({
    name: "changelog",
    description: "a log that says the changes",

    async run(message, args, client) {
        const embed = new discord.MessageEmbed()
        .setTitle('Changelog')
        .setDescription('**- Literally nothing**')
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();

        message.reply({ embeds: [embed] })
    }

})