console.clear();
const discord = require("discord.js");
const config = require("../data/conf");
const Client = require('./structures/Client');
const client = new Client();
client.start(config.general.token2);

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction

  if (commandName === 'ping') {
    const embed = new discord.MessageEmbed()
    .setTitle('Pong! :ping_pong:')
    .setDescription(`Ping: ${client.ws.ping}ms`)
    .setTimestamp();
    interaction.reply({ embeds: [embed] })
  }
    if (commandName === 'changelog') {
      const embed = new discord.MessageEmbed()
      .setTitle('Changelog')
      .setDescription('**- CenturyBot turns into Botic again\n- (Finished for now) Adding slash commands**')
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();

      interaction.reply({ embeds: [embed] })
    }
  })

this.setStatus = function setStatus(name = "set a status here", status = "dnd", type = 'PLAYING') {
  client.user.setActivity(name, { type: type });
  client.user.setStatus(status);
  console.log(
    `Botic2(Fetched setStatus(name: '${name}', status: '${status}', type: '${type}'))`
  );
}