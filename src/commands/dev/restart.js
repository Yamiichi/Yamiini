const { Command } = require('discord-akairo');

class RestartCommand extends Command {
  constructor() {
    super('restart', {
      aliases: ['restart', 'rs'],
      category: 'Dev',
      description: {
        content: '',
        usage: '',
        examples: ['']
      },
      ownerOnly: true
    });
  }

  exec(message) {
    require('child_process').execSync('pm2 restart 0');
  }
}

module.exports = RestartCommand;