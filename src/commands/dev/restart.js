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
      userPermissions: 'ADMINISTRATOR',
      ownerOnly: false
    });
  }

  exec(message) {
    require('child_process').execSync('pm2 restart 0');
    require('child_process').execSync('git pull');
  }
}

module.exports = RestartCommand;