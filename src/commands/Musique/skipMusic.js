const { Command } = require("discord-akairo");

class Skip extends Command{
    constructor() {
        super('skip', {
            aliases: ['skip', 's'],
            category: 'Music 🎶',
            description: {
                content: 'Skip la musique.',
                usage: 'skip',
                exemple: ['skip']
            }
        });
    }

    exec(message) {
        const voiceChannel = message.member.voice.channel;
        const musicPlayer = this.client.musicPlayer.get(message.guild.id);
        if(!(musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id))
        message.channel.send("Veuillez rejoindre le même salon vocal que le bot !"); 
        try {
            musicPlayer.stop();
            message.channel.send(`Skip : ${musicPlayer.queue[0].title}`);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Skip;