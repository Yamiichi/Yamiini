const { ErelaClient } = require("erela.js");
const { MessageEmbed } = require("discord.js");
const { Command } = require('discord-akairo');

class PlayMusic extends Command {
  constructor() {
    super('PlayMusic', {
      aliases: ['PlayMusic', 'playMusic', 'playmusic', 'pm', 'Pm', 'pM'],
      category: 'Musique',
      description: {
        content: 'Commande pour jouer de la musique',
        usage: 'PlayMusic [Titre] ou [URL]',
        examples: ['playmusic Samuel Kim', 'pm https://youtube/...']
      },
      userPermissions: 'CONNECT',
      channel: 'guild'
    });
  }

  exec(message) {
    message.channel.send();
  }
}

module.exports = PlayMusic;