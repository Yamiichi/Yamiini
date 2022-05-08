const { Command } = require('discord-akairo');
const { Options } = require('discord.js');

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

  async exec(message) {
    this.client.user.setActivity('Redémarrage du bot...');
    this.client.user.setStatus('idle');
    require('child_process').execSync('pm2 restart 0');
  }
}

module.exports = RestartCommand;