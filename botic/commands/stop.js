const Command = require('../structures/Command')
const config = require('../../data/conf')

module.exports = new Command({
    name: "stop",
    description: "asdasdasd",
    permission: "SEND_MESSAGES",
    async run(message, args, client)
    {
        if (message.author.id != config.dev.owners)
        {
            message.reply('That command isnt valid')
        }
        else
        {
            message.react('✅')
            require('../index').setStatus("Botic", "invisible", "PLAYING")
            setTimeout(() => {client.destroy()}, 500)
            // await client.destroy()
        }
    }
})