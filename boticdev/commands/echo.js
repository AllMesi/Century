const Command = require('../structures/Command')

module.exports = new Command({
    name: "echo",
    description: "lololol",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const smessage = message.content.split(' ').slice(1).join(' ');
        message.delete();
		await message.channel.send(smessage);
    }

})