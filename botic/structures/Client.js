const discord = require("discord.js");
const intents = new discord.Intents(32767);
const fs = require("fs");
const config = require('../../data/conf');
const Event = require("./Event.js");
class Client extends discord.Client {
  constructor() {
    super({ intents: intents });
    /**
     * @type {discord.Collection<string, Command>}
     */
    this.commands = new discord.Collection();
  }

  start(token) {
    fs.readdirSync("./botic/commands").filter(file => file.endsWith(".js")).forEach(file => {
      /**
       * @type {Command}
       */
      const command = require(`../commands/${file}`)
      console.log(`Fetched Command ${command.name}.`)
      this.commands.set(command.name, command);
      this.prefix = config.general.prefix;
    })

		fs.readdirSync("./botic/events")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../events/${file}`);
				console.log(`Fetched event ${event.event}.`);
				this.on(event.event, event.run.bind(null, this));
			});

    this.login(process.env.token)
  }
}

module.exports = Client;