const { Command } = require("discord-akairo");

class SkipMusic extends Command {
  constructor() {
    super('skip', {
      aliases: ['skip'],
      category: 'Musique'
    });
  }

  exec(message) {
    const voiceChannel = message.member.voice.channel;
    const musicPlayer = this.client.musicPlayer.get(message.guild.id);
    if (!(musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id))
      message.channel.send("Veuillez rejoindre le même salon vocal que le bot !");
    try {
      musicPlayer.stop();
      message.channel.send(`Skip : ${musicPlayer.queue[0].title}`);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SkipMusic;