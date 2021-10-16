/* eslint-disable no-unused-vars */
const discord = require("discord.js");
const intents = new discord.Intents(32767);
const Command = require("./Command")

class Client extends discord.Client {
    constructor(options) {
        super({ intents })

        /**
        * @type {discord.Collection<string, Command>}
        */

        this.commands = new discord.Collection();
    }
}

module.exports = Client;