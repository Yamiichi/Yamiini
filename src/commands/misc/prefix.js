const { Command } = require('discord-akairo');

class prefixCommand extends Command {
  constructor() {
    super('prefix', {
      aliases: ['prefix'],
      category: 'Misc',
      description: {
        content: 'La commande prefix configure le prefixe du bot.',
        usage: 'prefixe <prefix>',
        examples: ['prefix', 'prefix !']
      },
      userPermissions: 'ADMINISTRATOR',
      channel: 'guild',
      args: [{ id: 'newPrefix', type: 'string' }]
    });
  }

  async exec(message, args) {
    if (!args.newPrefix) return message.channel.send(`\`Prefix actuel -> ${await this.handler.prefix(message)}\``);
    await this.client.guildSettings.update(message.guild, { prefix: args.newPrefix });
    return message.channel.send(`\`Le prefix du serveur est maintenant -> ${args.newPrefix}\``);
  }
}

module.exports = prefixCommand;