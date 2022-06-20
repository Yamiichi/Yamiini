const { Listener } = require("discord-akairo");
const Manager = require("erela.js");
const Spotify = require('better-erela.js-spotify').default;
const { embed, embedVote } = require("../../util/functions");

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    async exec() {
        const urlVoteBot = "https://top.gg/bot/696156217856491591/vote";
        const urlInviteBot = "https://discord.com/oauth2/authorize?client_id=696156217856491591&scope=bot&permissions=0";
        const client = this.client;
        var trackmsg;

        function setPresence() {
            let activities = [
                { activity: { name: `${client.guilds.cache.size.toString()} serveurs!` }, status: 'online'},
                { activity: { name: 'l$help' }, status: 'idle'},
                { activity: { name: 'Shingeki no Kyogin movie !' }, status: 'online'}
            ]
    
            let activity = activities[Math.floor(Math.random() * activities.length)];
            client.user.setPresence(activity);
        }

        //setInterval(setPresence(), 30000);

        async function setMusicEmbed(player, embed) {
            trackmsg = await player.textChannel.send(embed);
        }

        client.manager = new Manager({
            nodes: [
              {
                host: 'localhost',
                port: 2333,
                password: 'youshallnotpass',
              },
            ],
            send(id, payload) {
              const guild = client.guilds.cache.get(id);
              if (guild) guild.shared.send(payload);
            },
            plugins: [new Spotify()],
          })
        
        .on('nodeConnect', (node) => console.log(`Node ${node.id} connected.`))
        .on("nodeError", (node, error) => console.log(`Node error: ${error.message}`))
        .on("trackStart", (player, track) => {
            /* const embedPlay = new MessageEmbed()
                .setAuthor('Musique actuelle', client.user.avatarURL())
                .setDescription(` ${track.title} <a:speakers:830938408485388308>`)
                .setColor("#0000FF")
            setMusicEmbed(player, embedPlay); */
        })
        .on("trackEnd", (player, track) => {
            trackmsg.delete();
        })
        .on("queueEnd", player => {
            player.textChannel.send("La playlist est terminée.")
            player.textChannel.send(embedVote);
            manager.players.destroy(player.guild.id);
        });
    }
}

module.exports = ReadyListener;
