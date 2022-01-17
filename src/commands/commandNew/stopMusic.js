const { Command } = require("discord-akairo");

class StopMusic extends Command {
  constructor() {
    super('stop', {
      aliases: ['stop'],
      category: 'Musique'
    });
  }
  exec(message) {

  }
}

module.exports = StopMusic;