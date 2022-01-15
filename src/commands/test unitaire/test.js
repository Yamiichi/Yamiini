const { Command } = require('discord-akairo');

class Test extends Command {
  constructor() {
    super('test', {
      aliases: ['test'],
      category: 'Dev',
      description: {
        content: 'Commande de test unitaire.\n\nEn cours de développement...',
        usage: '',
        examples: ['']
      },
      ownerOnly: true,
      channel: 'guild'
    });
  }

  exec(message) {
    message.channel.send();
  }
}

module.exports = Test;