const { Command } = require('discord-akairo');
const { Citation } = require('../../../structures/Models.js');

class DelCitation extends Command {
  constructor() {
    super('deletecitation', {
      aliases: ['delcitation', 'deletecitation', 'supprimercitation', 'supprcitation', 'delcit', 'deletecit', 'supprimercit', 'supprcit'],
      category: 'Citation',
      description: {
        content: 'Commande pour supprimer une citation.',
        usage: 'delcitation <id>',
        examples: ['delcitation 1', 'supprcitation 3']
      },
      ownerOnly: false
    });
  }

  async exec(message,args) {  
    let arg = args.args.split('');
    let mention = message.guild(message.mentions.users.first());
    
    if(!mention) {
      var response = await Citation.find({ userId : message.author.id }, (err, citations) => {
        if (err) console.log(err);
        if (citations.length === 0) {
          message.channel.send('Aucune citation n\'a été trouvée.');
        } else {
          //let citation = citations[Math.floor(Math.random() * citations.length)];
          const citationEmbed = new MessageEmbed()
            .setColor("#0000FF")
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Voici la liste des citations de \`${message.author.username}\` <a:recordspin:830936253025091654> `)
            .setFooter(`Liste de citations`, message.author.displayAvatarURL());
          for (let index = citations.length - 1; index >= 0; index--) {
            citationEmbed.addField(`Id de la citation`, citations[index].id, true);
            citationEmbed.addField(`Citation`, citations[index].citation, true);
            citationEmbed.addField('Date', citations[index].createdAt, true);
          }
          message.channel.send(citationEmbed);
        }
      }).clone().catch(function(err){ console.log(err)});
    }
    console.log(mention);
    var response = await Citation.find({ userId : mention.id }, (err, citations) => {
      if (err) console.log(err);
      if (citations.length === 0) {
        message.channel.send('Aucune citation n\'a été trouvée.');
      } else {
        //let citation = citations[Math.floor(Math.random() * citations.length)];
        const citationEmbed = new MessageEmbed()
          .setColor("#0000FF")
          .setAuthor(mention.user.username, mention.user.displayAvatarURL())
          .setDescription(`Voici la liste des citations de \`${mention.user.username}\` <a:recordspin:830936253025091654> `)
          .setFooter(`Liste de citations`, mention.user.displayAvatarURL());
          for (let index = citations.length - 1; index >= 0; index--) {
            citationEmbed.addField(`Id de la citation`, citations[index].id, true);
          citationEmbed.addField(`Citation`, citations[index].citation, true);
          citationEmbed.addField('Date', citations[index].createdAt, true);
        }
        message.channel.send(citationEmbed);
      }
    }).clone().catch(function(err){ console.log(err)});
    //return console.log(response.body);
  }
}


module.exports = DelCitation;