const { Command } = require('discord-akairo');
const { Citation } = require('../../../structures/Models.js');

class ListCitation extends Command {
  constructor() {
    super('list citation', {
      aliases: ['listcitation', 'listcit', 'listcitations', 'listecitation', 'listecit', 'listecitations'],
      category: 'Citation',
      description: {
        content: 'Commande pour afficher les citations.',
        usage: 'liste citation',
        examples: ['list cit'],
        args: [{id: 'user', type: 'usermention'}]
      },
      ownerOnly: false,
    });
  }

  async exec(message) {
    message.channel.bulkDelete("1");
    let user = message.content.split(' ')[1];
    let userId = user.split('@')[1].split('>')[0];
    let mention = message.mentions.users.first();
    if (!user) {
      userId = message.author.id;
      let citations = await Citation.find({userId: userId});
      if (citations.length !== 0) {
        let embed = this.client.functions.embed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor("#0099ff")
          for (let index = citations.length - 1; index >= 0; index--) {
            embed.addField(`Id de la citation`, citations[index].id, true);
            embed.addField(`Citation`, citations[index].citation, true);
            embed.addField('Date', citations[index].createdAt, true);
          }
        return message.channel.send({ embeds: [embed] });
      }
      else {
        return message.channel.send("Vous n'avez pas de citations.");
      }
    }
    else if (user && mention.id === userId ) {
      let citations = await Citation.find({userId: userId});
      if (citations.length === 0) {
        return message.channel.send("Cette personne n'a pas de citations.");
      }
      let embed = this.client.functions.embed()
          .setAuthor(mention.username, mention.avatarURL())
          .setColor("#0099ff")
          for (let index = citations.length - 1; index >= 0; index--) {
            embed.addField(`Id de la citation`, citations[index].id, true);
            embed.addField(`Citation`, citations[index].citation, true);
            embed.addField('Date', citations[index].createdAt, true);
          }
        return message.channel.send({ embeds: [embed] });
    }
    else {
      let embed = this.client.functions.embed()
        .setTitle("Erreur")
        .setColor("#0099ff")
        .setDescription("Soit la personnne que vous avez mentionnée n'existe pas, soit elle n'a pas de citation.");
      return message.channel.send({ embed });
    }
  }
}

module.exports = ListCitation;