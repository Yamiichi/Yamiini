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
        examples: ['delcit 1', 'supprcitation 3']
      },
      ownerOnly: false
    });
  }

  async exec(message) {
    message.channel.bulkDelete("1");
    let args = message.content.split(' ');
    let id = args[1];
    if (!id) {
      return message.channel.send(`Veuillez entrer un id de citation.`);
    }
    let citations = await Citation.find({userId: message.author.id, edit: message.author.id});
    for (let index = citations.length - 1; index >= 0; index--) { 
      if (id === citations[index].id) {
        Citation.deleteOne({id: id}).then(citation => {
          if (citation.deletedCount === 0) {
            return message.channel.send(`Aucune citation n'a été trouvée.`);
          }
          else {
            return message.channel.send(`La citation N°${id} \`${citations[index].citation}\` a été supprimée.`);
          }
        }).catch(err => {
          console.log(`Voici l'erreur ${err}`);
        });
      }
    }
    return message.channel.send("La citation que vous vouliez supprimer n'existe pas ou ne vous appartient pas.");
  }
}


module.exports = DelCitation;