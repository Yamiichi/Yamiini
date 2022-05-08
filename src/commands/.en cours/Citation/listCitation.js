const { Command } = require('discord-akairo');
const { Citation } = require('../../../structures/Models.js');
const { MessageEmbed } = require("discord.js");

class ListCitation extends Command {
  constructor() {
    super('list citation', {
      aliases: ['listcitation', 'listcit', 'listcitations', 'listecitation', 'listecit', 'listecitations'],
      category: 'Citation',
      description: {
        content: 'Commande pour afficher les citations.',
        usage: 'liste citation',
        examples: ['list cit']
      },
      ownerOnly: false
    });
  }

  async exec(message) {
    let args = message.content.split(' ');
    message.channel.bulkDelete("1");
    Citation.find().then(citations => {
      if (citations.length === 0) {
        return message.channel.send(`Aucune citation n'a été trouvée.`);
      }
      else {
        let embed = new MessageEmbed()
        .setTitle("Liste des citations")
        .setDescription(`${citations.map(citation => `${citation.id} - ${citation.citation}`).join('\n')}`)
        .setColor("#0099ff")
        .setTimestamp()

        return message.channel.send(embed);
      }
    }).catch(err => {
      console.log(`Voici l'erreur ${err}`);
    }
    );

    /* message.channel.bulkDelete("1");
    Citation.findOne({
      where: {
        guildId: message.guild.id
      }
    }).then(citations => {
      if (citations.length === 0) {
        message.channel.send(`Aucune citation n'a été trouvée.`);
      }
      else {
        const citationEmbed = new MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Voici la liste des citations de \`${message.author.username}\` <a:recordspin:830936253025091654> `);
        for (let index = citations.length - 1; index >= 0; index--) {
          citationEmbed.addField(`Id de la citation`, citations[index].id, true);
          citationEmbed.addField(`Citation`, citations[index].citation, true);
          citationEmbed.addField('Date', citations[index].createdAt, true);
        }
        return message.channel.send({ embeds: [citationEmbed] });
      }
    }).catch(err => {
      console.log(`Voici l'erreur ${err}`);
    }); */
  }
}

module.exports = ListCitation;