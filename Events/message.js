const Discord = require("discord.js");
const config = require("../config.json");

module.exports = async(client, message) => {
    const prefix = config["prefix"];

    if(message.author.client) return;
    if(message.channel.type === "dm") return;

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if(!cmd) return;

    cmd.run(client, message, args);
};