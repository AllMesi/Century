const Event = require("../structures/Event");
const index = require('../index');
const http = require('http');

module.exports = new Event("ready", (client, message) => {
    index.setStatus("...", "dnd")
    const activities_list = [,
        { type: 'WATCHING', message: `${client.guilds.cache.size} servers`},
        { type: 'WATCHING', message: `${client.users.cache.size} users`},
        { type: 'PLAYING', message: `a game`},
        { type: 'WATCHING', message: `a video`},
        { type: 'LISTENING', message: `music`},
        // { type: 'WATCHING', message: `a video`},
        // { type: 'WATCHING', message: `a video`},
        // { type: 'WATCHING', message: `a video`},
        // { type: 'WATCHING', message: `a video`},
        // { type: 'WATCHING', message: `a video`},
        // { type: 'WATCHING', message: `a video`},
        // { type: 'WATCHING', message: `a video`}
    ];
    setInterval(() => {
        // http.get('http://centuryapp.herokuapp.com')
        const bruh = Math.floor(Math.random() * (activities_list.length - 1) + 1);

        index.setStatus(activities_list[bruh].message, "dnd", activities_list[bruh].type);
    }, 5000)
    console.log("CenturyBot is online!");
});