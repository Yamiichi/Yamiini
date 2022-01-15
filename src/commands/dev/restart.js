const { Command } = require('discord-akairo');

class RestartCommand extends Command {
  constructor() {
    super('restart', {
      aliases: ['restart', 'rs'],
      category: 'Dev',
      description: {
        content: 'Commande pour redémarrer le bot.',
        usage: 'restart',
        examples: ['restart', 'rs']
      },
      ownerOnly: true
    });
  }

  exec(message) {
    require('child_process').execSync('pm2 restart 0');
  }
}

module.exports = RestartCommand;