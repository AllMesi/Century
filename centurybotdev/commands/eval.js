const Command = require('../structures/Command')
const config = require('../../config')

module.exports = new Command({
    name: "eval",
    description: "hi",

    async run(message, args, client)
    {
        if (message.author.id != config.dev.owners)
        {
            message.reply('That command isnt valid')
        }
        else
        {
            const result = message.content.split(' ').slice(1).join(' ');
            eval(result);
        }
    }

})