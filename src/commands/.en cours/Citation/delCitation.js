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
    let args = message.content.split(' ');
    let id = args[1];
    message.channel.bulkDelete("1");
    if (!id) {
      return message.channel.send(`Veuillez entrer un id de citation.`);
    }
    if (id.length !== 1) {
      return message.channel.send("L'usage n'est pas correct. Veuillez recommencer la procédure!");
    }
    Citation.deleteOne({id: id}).then(citation => {
      if (citation.deletedCount === 0) {
        return message.channel.send(`Aucune citation n'a été trouvée.`);
      }
      else {
        return message.channel.send(`La citation N°${id} a été supprimée.`);
      }
    }).catch(err => {
      console.log(`Voici l'erreur ${err}`);
    });
  }
}


module.exports = DelCitation;