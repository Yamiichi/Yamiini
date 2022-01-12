const { MessageEmbed, MessageReaction } = require("discord.js");

module.exports = async(Client) => {

    Client.user.setPresence({
        activity: {
            name: "trouver sa raison de vivre"
        }
    })
};