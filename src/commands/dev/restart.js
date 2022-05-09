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

  async exec(message) {
    message.channel.bulkDelete(1);
    this.client.user.setActivity('Redémarrage du bot...');
    this.client.user.setStatus('idle')
    setInterval(() => { require('child_process').execSync('pm2 restart 0'); }, 1000);
  }
}

module.exports = RestartCommand;