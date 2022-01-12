const Discord = require("discord.js");
const config = require("./config.json");

module.exports = async(bot, message) => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(config["prefix"].length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = bot.commands.get(commande);

    if(!cmd) return;

    cmd.run(bot, message, args);
};