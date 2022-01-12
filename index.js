const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("./config.json");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const fs = require("fs");
const message = require("./Events/message");

Client.login(config["TOKEN"]);

Client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        Client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];
        Client.on(event, events.bind(null, Client));
    });
});

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("revoie pong")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("utilisateur que vous souhaitez mentionner")
        .setRequired(false));

Client.on("ready", () => {
    //? Pour tout les serv
    //? Client.application.commands.create(data);

    Client.guilds.cache.get("696347975563083808").commands.create(data);

    console.log("bot opérationnel");
    
});

Client.on("interactionCreate", interaction => {
    if (interaction.isCommand()) {
        if (interaction.commandName === "ping") {
            let user = interaction.options.getUser("utilisateur");

            if (user != undefined) {
                interaction.reply(`pong <@${user.id}>`)
            }
            else{
                interaction.reply("pong");
            }
        }
    }
})