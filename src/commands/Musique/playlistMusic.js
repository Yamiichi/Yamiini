const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class Playlist extends Command {
    constructor() {
        super('queue', {
            aliases: ['q', 'queue', 'playlist'],
            category: 'Music 🎶',
            description: {
                content: 'Affiche la playlist.',
                usage: 'queue',
                exemple: ['queue']
            }
        });
    }

    exec(message) {
        const voiceChannel = message.member.voice.channel;
        const musicPlayer = this.client.music.players.get(message.guild.id);
        if (!musicPlayer) {
            return message.channel.send("LUCARIO ne joue aucune musique actuellement");
        }
        let duration = 0;
        for (let durationIndice = 0; durationIndice < musicPlayer.queue.length; durationIndice++) {
            duration = duration + musicPlayer.queue[durationIndice].duration;
        }

        const embed = new MessageEmbed()
            .setTitle("<a:recordspin:830936253025091654> Liste des 5 prochaines musiques : ")
            .setDescription(`Actuelle : [${musicPlayer.queue[0].title}](${musicPlayer.queue[0].uri})`)
            .setColor("#0000FF")
            .setFooter(`Playlist - Consultez la file d'attente`, this.client.user.avatarURL());

        const queueEmbed = queue => {
            for(let i = 0; i < queue.length; i++) {
                const nextTracks = queue.slice((i + 1), 6);
                nextTracks.map(t => embed.addField(`${++i}. ${t.title}`, `\`Durée -> ${Math.trunc(t.duration/1000/60)}:${t.duration/1000%60}\``))
            }
            embed.addField('\u200b', '\u200b', false);
            embed.addField(`Musiques restantes`, `\`${queue.length}\``, true);
            embed.addField(`Temps restant`, `\`${Math.trunc(duration/1000/60)} minutes et ${duration/1000%60} secondes\``, true);
            return message.channel.send(embed);
        }
        (musicPlayer && voiceChannel) && (musicPlayer.voiceChannel.id === voiceChannel.id) ? queueEmbed(musicPlayer.queue) :
        message.channel.send("Veuillez rejoindre le même salon vocal que le bot !"); 
        }
}

module.exports = Playlist;