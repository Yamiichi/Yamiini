const { Command } = require('discord-akairo');
const { prefix } = require('../../util/config');

class Etat extends Command {
  constructor() {
    super('status', {
      aliases: ['status'],
      category: 'Dev',
      description: {
        content: 'Commande de status unitaire.\n\nEn cours de développement...',
        usage: 'status [online/dnd/idle]',
        examples: ['status online', 'status dnd']
      },
      ownerOnly: true,
      channel: 'guild',
      args: [{ id: 'etat', type: 'string' }]
    });
  }

  async exec(message, args) {
    if (args.etat === 'online' | args.etat === 'dnd' | args.etat === 'idle') {
      this.client.user.setStatus(args.etat);
      if (args.etat === 'online') {
        etat = 'ligne';
      }
      else if (args.etat === 'dnd') {
        etat = 'ne pas déranger';
      }
      else if (args.etat === 'idle') {
        etat = 'inactif';
      }
      message.channel.send(`Le bot est maintenant en ${etat}`);
    }
    else if (!args.etat) {
      var etat = this.client.user.presence.status;
      if (etat === 'online') {
        etat = 'ligne';
      }
      else if (etat === 'dnd') {
        etat = 'ne pas déranger';
      }
      else if (etat === 'idle') {
        etat = 'inactif';
      }
      message.channel.send(`Le status est actuellement en ${etat}.`);
    }
    else {
      message.channel.send(`Vous avez mal orthografé la commande. \n\nPour avoir la liste des status, tapez \`${prefix}help status\`.`);
    }
  }
}

module.exports = Etat;