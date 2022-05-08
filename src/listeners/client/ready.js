const { MessageEmbed, Client } = require('discord.js');
const { Listener } = require('discord-akairo');
//const { ErelaClient } = require("erela.js");

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        /* const client = new Client();
        const nodes = [{
            host: "localhost",
            port: 8000,
            password: "mypassword",
        }];
        client.music = new ErelaClient(client, nodes)
        async function setMusicEmbed(player, embed) {
            trackmsg = await player.textChannel.send(embed);
        
        const embedVote = new MessageEmbed()
            .setDescription(`Supportez le bot en [votant](${urlVoteBot}) ou en [l'invitant](${urlInviteBot}) Vous pouvez voter toutes les 12 h!`)
            .setColor("#0000FF")
            .setFooter("Vote soutien bot LUCARIO")
            .setImage("https://d.facdn.net/art/asherthefox/1518873125/1518873125.asherthefox_lucarioocarina.png");
        
        this.client.music.on("nodeConnect", node => console.log("Client Erela connecté!"));
        this.client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
        this.client.music.on("trackStart", (player, track) => {
            const embedPlay = new MessageEmbed()
                .setAuthor('Musique actuelle', this.client.user.avatarURL())
                .setDescription(` ${track.title} <a:speakers:830938408485388308>`)
                .setColor("#0000FF")
            setMusicEmbed(player, embedPlay);
        });
        this.client.music.on("trackEnd", (player, track) => {
            trackmsg.delete();
        });
        this.client.music.on("queueEnd", player => {
            player.textChannel.send("La playlist est terminée.")
            player.textChannel.send(embedVote);
            this.client.music.players.destroy(player.guild.id);
        });

        console.log('Je suis prêt');
        } */
    }
}

module.exports = ReadyListener;