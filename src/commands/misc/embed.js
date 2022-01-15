const { Command } = require('discord-akairo');
const { MessageEmbed, Message } = require('discord.js');

class EmbedCommand extends Command {
  constructor() {
    super('embed', {
      aliases: ['embed']
    });
  }

  exec(message) {
    return message.channel.send({
      embeds: [
        this.client.functions.embed()
          .setDescription("Hello!")
          .addField('Titre', 'Valeur')
      ]
    });
  }
}

module.exports = EmbedCommand;