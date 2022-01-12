const Discord = require('discord.js');
const { debuglog } = require('util');

let i = 0;
while (i < 20) {

    var myVar = setInterval(wait, 2000);

    function wait() {
        module.exports.run = async(bot, message, args) => {
            
            let debut = Date.now();
            message.channel.send("ntm");
            
        };
    }
}
module.exports.help = {
    name: "ntm"
}