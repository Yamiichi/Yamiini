const { Command } = require('discord-akairo');

class ShutdownCommand extends Command {
  constructor() {
    super('shutdown', {
      aliases: ['shutdown', 'sd'],
      category: 'Dev',
      description: {
        content: 'Commande pour arreter le bot.',
        usage: 'shutdown',
        examples: ['shutdown', 'sd']
      },
      ownerOnly: true
    });
  }

  async exec() {
    this.client.user.setActivity('Arrêt du bot...');
    this.client.user.setStatus('idle');
    require('child_process').execSync('pm2 stop 0');
  }
}

module.exports = ShutdownCommand;