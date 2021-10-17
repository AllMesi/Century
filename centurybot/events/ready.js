const Event = require("../structures/Event");
const bot = require('..')

module.exports = new Event("ready", (client, message) => {
    bot.setStatus("CenturyBot", "dnd");
    console.log("CenturyBot is online!");
});