const Command = require('../structures/Command')
const discord = require('discord.js')

module.exports = new Command({
    name: "changelog",
    description: "a log that logs the changes",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const embed = new discord.MessageEmbed()
        .setTitle('Changelog')
        .setDescription('**- CenturyBot turns into Botic again\n- (In Progress) Adding slash commands**')
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();

        message.reply({ embeds: [embed] })
    }
})