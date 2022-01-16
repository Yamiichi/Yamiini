const { Command } = require('discord-akairo');

class Etat extends Command {
  constructor() {
    super('status', {
      aliases: ['status'],
      category: 'Dev',
      description: {
        content: 'Commande de status unitaire.\n\nEn cours de développement...',
        usage: '',
        examples: ['']
      },
      ownerOnly: true,
      channel: 'guild',
      args: [{ id: 'etat', type: 'string'}]
    });
  }

  async exec(message, args) {
    if (!args.etat) {
      return message.channel.send(`\`Status du bot actuel -> ${await this.handler.status(message)}\``);
    }
    else if (args.etat == 'online') {
      await this.client.guildSettings.update(message.guild, { status: args.etat });
      return message.channel.send(`\`Status du bot actuel -> ${await this.handler.status(message)}\``);
    }
    else if (args.etat == 'offline') {
      await this.client.guildSettings.update(message.guild, { status: args.etat });
      return message.channel.send(`\`Status du bot actuel -> ${await this.handler.status(message)}\``);
    }
    else if (args.status == 'dnd') {
      await this.client.guildSettings.update(message.guild, { status: args.etat });
      return message.channel.send(`\`Status du bot actuel -> ${await this.handler.status(message)}\``);
    }
    else if (args.status == 'idle') {
      await this.client.guildSettings.update(message.guild, { status: args.etat });
      return message.channel.send(`\`Status du bot actuel -> ${await this.handler.status(message)}\``);
    }
    else return message.channel.send(`\`Quelque chose de facheux c'est produit !\``);
  }
}

module.exports = Etat;