const { MessageEmbed } = require("discord.js");

module.exports = {
  embed: function () {
    return new MessageEmbed()
      .setColor('DARK_RED')
  },

  embedVote: function () {
    return new MessageEmbed()
      .setDescription(`Supportez le bot en [votant](${urlVoteBot}) ou en [l'invitant](${urlInviteBot}) Vous pouvez voter toutes les 12 h!`)
      .setColor("#0000FF")
      .setImage("https://d.facdn.net/art/asherthefox/1518873125/1518873125.asherthefox_lucarioocarina.png")
  },
};