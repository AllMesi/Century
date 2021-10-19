const Command = require('../structures/Command')
const config = require('../../data/conf')

module.exports = new Command({
    name: "eval",
    description: "EvalaUATION",
    permission: "SEND_MESSAGES",
    async run(message, args, client)
    {
        if (message.author.id != config.dev.owners)
        {
            message.reply('That command isnt valid')
        }
        else
        {
            // config.dev.eval = true;
            const result = message.content.split(' ').slice(1).join(' ');
            eval(result);
        }
    }
})