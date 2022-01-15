const { Command } = require('discord-akairo');

class Test extends Command {
  constructor() {
    super('test', {
      aliases: ['test'],
      channel: 'guild'
    });
  }

  exec(message) {
    message.channel.send();
  }
}

module.exports = Test;