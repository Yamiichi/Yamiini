const { Manager } = require('erela.js');
const Spotify = require('better-erela.js-spotify').default;

const manager = new Manager({
  send(id, payload) {
    let guild = this.client.guilds.cache.get(id);
    guild.shared.send(payload);
  },
  autoPlay: false,
  nodes: [
    {
      host: 'localhost',
      port: 2333,
      password: 'youshallnotpass',
    },
  ],
  plugins: [new Spotify()],
});

module.exports = manager;