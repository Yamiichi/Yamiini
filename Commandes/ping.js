const Discord = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports.run = async(bot, message, args) => {


    let debut = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`j'ai mis : ${Date.now() - debut} ms pd.`));

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
    
};

module.exports.help = {
    name: "ping"
}