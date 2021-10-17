/* eslint-disable no-loss-of-precision */
const dotenv = require("dotenv");
dotenv.config();

module.exports = {};

module.exports.general = {
  prefix: "c/",
  prefix2: "c.",
  guildId: 898055567464071222,
  clientId: 809298692845731841,
};

module.exports.dev = {
  owners: 639406418252005385,
};

module.exports.private = {
  token: process.env.token,
  token2: process.env.token2
};