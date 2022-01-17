const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class Leave extends Command {
    constructor() {
        super('leave', {
            aliases: ['leave'],
            category: 'Musique'
        });
    }

    exec(message) {
        const voiceChannel = message.member.voice.channel;
        const musicPlayer = this.client.musicPlayer.get(message.guild.id);

        (musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id) ? this.client.music.players.destroy(message.guild.id) :
            message.channel.send("Veuillez rejoindre le même salon vocal que le bot !");
    }
}

module.exports = Leave;