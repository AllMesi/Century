const Command = require('../structures/Command')

module.exports = new Command({
    name: "sendIn",
    description: "DEV",

    async run(message, args, client) {
        if (message.author.id != require('../../config').dev.owners)
        {
            message.reply('That command isnt valid')
        }
        else
        {
            const message0 = message.content.split(' ').slice(1).join(' ');
            const message1 = message.content.split(' ').slice(2).join(' ');
            client.channels.cache.get(message0).send(message1);
        }
    }
})