const { Command } = require('discord-akairo');

class remindResineCommand extends Command {
  constructor() {
    super('remindResine', {
      aliases: ['rr', 'remind resine', 'rmd res', 'rmd resine', 'remindresine']
    });
  }

  exec(message) {
    return message.reply('');
  }
}

module.exports = remindResineCommand;