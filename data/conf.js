require("dotenv/config");

module.exports = {};

module.exports.general = {
  prefix: "c/",
  prefix2: "c.",
  guildId: '828241152896663552',
  clientId: '809298692845731841',
  port: 3000 || process.env.PORT
};

module.exports.dev = {
  owners: '639406418252005385',
  eval: false
};

module.exports.private = {
  token: process.env.token,
  token2: process.env.token2
};