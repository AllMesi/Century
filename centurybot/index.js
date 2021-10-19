console.clear();
const config = require("../config");
const Client = require('./structures/Client');
const client = new Client();
client.start(config.general.token);

this.setStatus = function setStatus(name = "set a status here", status = "dnd", type = 'PLAYING') {
  client.user.setActivity(name, { type: type });
  client.user.setStatus(status);
  console.log(
    `CenturyBot(Fetched setStatus(name: '${name}', status: '${status}', type: '${type}'))`
  );
}