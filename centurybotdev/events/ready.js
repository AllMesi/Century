const Event = require("../structures/Event");
const bot = require('..')

module.exports = new Event("ready", (client, message) => {
    bot.setStatus("botic", "dnd");
    console.log("botic is online!");
});