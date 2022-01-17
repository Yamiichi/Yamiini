const { Command } = require('discord-akairo');
const { Activity } = require('discord.js');
const fs = require('fs');

class Etat extends Command {
  constructor() {
    super('status', {
      aliases: ['status'],
      category: 'Dev',
      description: {
        content: 'Commande de status unitaire.\n\nEn cours de développement...',
        usage: 'status [online/offline/dnd/idle]',
        examples: ['status online', 'status dnd']
      },
      ownerOnly: true,
      channel: 'guild',
      args: [{ id: 'etat', type: 'string' }]
    });
  }

  exec(message, args) {
    
    if (!args.etat) {
      message.channel.send(`Status du bot actuel : \`${this.client.options.presence['status']}\``);
    }
    else if (args.etat == 'online') {
      console.log('Avant ' + this.client.options.presence['status']);
      this.client.options.presence['status'] = 'online';
      message.channel.send(`Status du bot changé : \`${this.client.options.presence['status']}\``);
      console.log('Maintenant ' + this.client.options.presence['status']);
    }
    else if (args.etat == 'offline') {
      console.log('Avant ' + this.client.options.presence['status']);
      this.client.options.presence['status'] = 'invisible';
      message.channel.send(`Status du bot changé : \`${this.client.options.presence['status']}\``);
      console.log('Maintenant ' + this.client.options.presence['status']);
    }
    else if (args.etat == 'dnd') {
      console.log('Avant ' + this.client.options.presence['status']);
      this.client.options.presence['status'] = 'dnd';
      message.channel.send(`Status du bot changé : \`${this.client.options.presence['status']}\``);
      console.log('Maintenant ' + this.client.options.presence['status']);
    }
    else if (args.etat == 'idle') {
      console.log('Avant ' + this.client.options.presence['status']);
      Activity
      this.client.options.presence['status'] = 'idle';
      message.channel.send(`Status du bot changé : \`${this.client.options.presence['status']}\``);
      console.log('Maintenant ' + this.client.options.presence['status']);
    }
    else return message.channel.send(`\`Quelque chose de facheux c'est produit !\``);
  }
}

module.exports = Etat;