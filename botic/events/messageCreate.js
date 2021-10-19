const Event = require("../structures/Event");

module.exports = new Event("messageCreate", (client, message) => {
      // console.log(`${message.author.id} Sent a message: ${message.content}`);

  if (message.author.bot) return;

  if (!message.content.startsWith(client.prefix)) return;

  const args = message.content.substring(client.prefix.length).split(/ +/);

  const command = client.commands.find(cmd => cmd.name == args[0]);

  if (!command) return message.reply("That command isnt valid");

  command.run(message, args, client)
  
  const permission = message.member.permissions.has(command.permission)
  if (!permission) return message.reply(`YOU DO NOT HAVE THE PERMISSION \`${command.permission}\``)
});