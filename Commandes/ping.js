const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {


    let debut = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`j'ai mis : ${Date.now() - debut} ms pd.`));
    
};

module.exports.help = {
    name: "ping"
}