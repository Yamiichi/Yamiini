const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class Pause extends Command {
    constructor() {
        super("pause", {
            aliases: ["pause"],
            category: "Music 🎶",
            description: {
                content: "Met en pause la musique.",
                usage: "pause",
                exemple: ["pause"]
            }
        });
    }

    exec(message) {
        const voiceChannel = message.member.voice.channel;
        const musicPlayer = this.client.musicPlayer.get(message.guild.id);
        if (!(musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id)) {
            message.channel.send("Veuillez rejoindre le même salon vocal que le bot !");
        } else {
            musicPlayer.pause(true);
            return message.channel.send("Musique en pause !");
        }
    }
}

module.exports = Pause;