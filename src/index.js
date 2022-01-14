const YamiiniClient = require('./stuctures/YamiiniClient');
const config = require("./config.json");

let Client = new YamiiniClient({
  prefix: 'Y$'
})

Client.login(config["TOKEN"]);