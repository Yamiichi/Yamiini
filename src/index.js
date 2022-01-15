const { TOKEN } = require('./util/config');
const YamiiniClient = require('./structures/YamiiniClient');

let client = new YamiiniClient({
  prefix: 'Y$'
});

client.login(TOKEN);