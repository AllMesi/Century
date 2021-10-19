const Event = require("../structures/Event");
const index = require('../index');
const http = require('http');
const config = require('../../data/conf')

module.exports = new Event("ready", (client, message) => {
    if (!require('../../data/conf').dev.eval)
    {
        index.setStatus("...", "dnd")
        const activities_list = [,
            { type: 'WATCHING', message: `over ${client.guilds.cache.size} servers`},
            { type: 'WATCHING', message: `over ${client.users.cache.size} users`},
            { type: 'PLAYING', message: `a game`},
            { type: 'WATCHING', message: `a video`},
            { type: 'WATCHING', message: `a twitch stream`},
            { type: 'LISTENING', message: `music`},
        ];
        setInterval(() => {
            // http.get('http://centuryapp.herokuapp.com')
            const bruh = Math.floor(Math.random() * (activities_list.length - 1) + 1);

            index.setStatus(activities_list[bruh].message, "dnd", activities_list[bruh].type);
        }, 5000)
    }
    else
    {
        index.setStatus("Botic", "dnd", "PLAYING")
    }
    console.log("Botic is online!");
    const guild = /*client.guilds.cache.get(config.general.guildId)*/ null
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'when pong'
    })
    commands?.create({
        name: 'changelog',
        description: 'a log that logs the changes'
    })
});