const Command = require("../structures/Command")

module.exports = new Command({
    name: "eval",
    description: "evaluation",

    // eslint-disable-next-line no-unused-vars
    async run(message, args, client) {
        // eslint-disable-next-line no-loss-of-precision
        if (message.author.id != 639406418252005385)
        {
            message.reply('bye')
        }
        else
        {
            const result = message.content.split(' ').slice(1).join(' ');
            eval(result);
        }
    }
});