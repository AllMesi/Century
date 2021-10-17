console.clear();
const config = require("../config");
const Client = require('./structures/Client');
const client = new Client();
client.start(config.general.token2);

this.setStatus = function setStatus(name = "default", status = "dnd") {
  client.user.setPresence({ activity: { name: name }, status: status });
  console.log(
    `CenturyBot(Fetched setStatus(name: ${name}, status: ${status}))`
  );
}