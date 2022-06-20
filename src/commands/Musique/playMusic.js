const { MessageEmbed } = require("discord.js");
const { Command } = require('discord-akairo');
const manager = require("../../listeners/client/manager");

class Play extends Command {
    constructor() {
        super('play', {
            aliases: ['play', 'p'],
            category: 'Music 🎶',
            description: {
                content: 'Joue une musique.',
                usage: 'play <lien/titre>',
                exemple: [ 'play https://www.youtube.com/watch?v=dQw4w9WgXcQ' ]
            },
            args: [
                { id: 'args', match: 'content' },
            ]
        });
    }

    async exec(message, args) {
        const voiceChannel = message.member.voice.channel;
        const q = args.args;
        
        const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Voici les 5 premières recherches pour \`${q}\` <a:recordspin:830936253025091654> `)
            .setColor("#0000FF")
            .setFooter(`Commande Play - 10 seconds to choose `, message.author.displayAvatarURL());
        if (voiceChannel) {
            const player = await manager.create({
                guild: message.guild.id,
                voiceChannel: voiceChannel.id,
                textChannel: message.channel.id
            });

            if (!q) {
                if (manager.get(message.guild.id) === undefined) { 
                    console.log(`${message.author.username} a essayé de jouer une musique sans avoir de musique en cours.`);
                    return message.channel.send("Aucune musique n'est en cours !. Merci de mettre un lien ou un titre pour commencer une lecture."); 
                }
                else {
                    console.log(`${message.author.username} a mis sur play`);
                    manager.get(message.guild.id).pause(false);
                    return message.channel.send("Musique relancée !");
                }
            }
            console.log(q, message.author.username);
            manager.set(message.guild.id, player);
            const embedPlay = new MessageEmbed();
            try {
                let trackNumber = 0;
                const musicSearchResults = await this.client.music.search(q, message.author);
                console.log(musicSearchResults);
                if (musicSearchResults.loadType === 'PLAYLIST_LOADED') {
                    message.channel.send(`<:yt:830928710835503124> Recherche en cours... <a:wii:698114156972343346> `);
                    const tracks = await musicSearchResults.playlist.tracks;
                    const getMusicPlayer = manager.get(message.guild.id);
                    for (let i = 0; i < tracks.length; i++) {
                        getMusicPlayer.queue.add(tracks[i]);
                    }
                    message.channel.send(embedPlay
                        .setAuthor(`Playlist ajoutée! `, message.author.displayAvatarURL())
                        .setDescription(`${tracks.length} musiques ont été ajoutées à la playlist actuelle <a:music_level:830939583101009920>`)
                        .setColor("#0000FF"));
                    if (!getMusicPlayer.playing) getMusicPlayer.play();

                } else if (musicSearchResults.loadType === 'TRACK_LOADED') {
                    message.channel.send(`<:yt:830928710835503124> Recherche en cours... <a:wii:698114156972343346> `);
                    const tracks = await musicSearchResults.tracks;
                    const getMusicPlayer = manager.get(message.guild.id);
                    let track = 0;
                    track = tracks[0];
                    getMusicPlayer.queue.add(track);
                    message.channel.send(embedPlay
                        .setDescription(`\`${track.title}\` a été ajoutée à la playlist actuelle <a:recordspin:830936253025091654>`)
                        .setColor("#0000FF"));
                    if (!getMusicPlayer.playing) getMusicPlayer.play();

                } else if (musicSearchResults.loadType === 'SEARCH_RESULT') {
                    const tracks = await musicSearchResults.tracks.slice(0, 5);

                    tracks.map(r => embed.addField(`${++trackNumber}. ${r.title}`, `\`Durée -> ${Math.trunc(r.duration/1000/60)}:${r.duration/1000%60}\``));
                    message.channel.send(`<:yt:830928710835503124> Recherche en cours... <a:wii:698114156972343346> `);
                    const playmsg = await message.channel.send(embed);

                    const filter = (reaction, user) => {
                        return user.id === message.author.id;
                    };
                    
                    const collector = playmsg.createReactionCollector(filter, { time: 30000 });
                    
                    collector.on('collect', (reaction, user) => {
                        //console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                        if (["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "❌"].includes(reaction.emoji.name)) {
                            const getMusicPlayer = manager.get(message.guild.id);
                            let track = 0;
                            switch (reaction.emoji.name) {
                                case "1️⃣": track = tracks[0];
                                    getMusicPlayer.queue.add(track);
                                    message.channel.send(embedPlay
                                        .setDescription(`\`${track.title}\` a été ajoutée à la playlist actuelle <a:recordspin:830936253025091654>`)
                                        .setColor("#0000FF"));
                                    if (!getMusicPlayer.playing) getMusicPlayer.play();
                                    playmsg.delete();
                                    break;
                                case "2️⃣": track = tracks[1];
                                    getMusicPlayer.queue.add(track);
                                    message.channel.send(embedPlay
                                        .setDescription(`\`${track.title}\` a été ajoutée à la playlist actuelle <a:recordspin:830936253025091654>`)
                                        .setColor("#0000FF"));
                                    if (!getMusicPlayer.playing) getMusicPlayer.play();
                                    playmsg.delete();
                                    break;
                                case "3️⃣": track = tracks[2];
                                    getMusicPlayer.queue.add(track);
                                    message.channel.send(embedPlay
                                        .setDescription(`\`${track.title}\` a été ajoutée à la playlist actuelle <a:recordspin:830936253025091654>`)
                                        .setColor("#0000FF"));
                                    if (!getMusicPlayer.playing) getMusicPlayer.play();
                                    playmsg.delete();
                                    break;
                                case "4️⃣": track = tracks[3];
                                    getMusicPlayer.queue.add(track);
                                    message.channel.send(embedPlay
                                        .setDescription(`\`${track.title}\` a été ajoutée à la playlist actuelle <a:recordspin:830936253025091654>`)
                                        .setColor("#0000FF"));
                                    if (!getMusicPlayer.playing) getMusicPlayer.play();
                                    playmsg.delete();
                                    break;
                                case "5️⃣": track = tracks[4];
                                    getMusicPlayer.queue.add(track);
                                    message.channel.send(embedPlay
                                        .setDescription(`\`${track.title}\` a été ajoutée à la playlist actuelle <a:recordspin:830936253025091654>`)
                                        .setColor("#0000FF"));
                                    if (!getMusicPlayer.playing) getMusicPlayer.play();
                                    playmsg.delete();
                                    break;
                                case "❌": playmsg.delete();
                                    message.channel.send("Requête refusée <a:gifanime:698114211032858675>");
                            }
                        }
                    });
                    
                    await playmsg.react("1️⃣");
                    await playmsg.react("2️⃣");
                    await playmsg.react("3️⃣");
                    await playmsg.react("4️⃣");
                    await playmsg.react("5️⃣");
                    await playmsg.react("❌");

                }
                
            } catch (e) {
                
            }
        } else {
            message.channel.send("Rejoins d'abord un channel vocal :face_with_symbols_over_mouth: !");
        }
    }   
}

module.exports = Play;