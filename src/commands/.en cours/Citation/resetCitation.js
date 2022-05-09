const { Command } = require('discord-akairo');
const { Citation } = require('../../../structures/Models.js');

class ResetCitation extends Command {
  constructor() {
    super('resetcitation', {
      aliases: ['resetcit'],
      category: 'Citation',
      description: {
        content: 'Commande pour réinitialiser toute les citations.',
        usage: 'resetcitation',
        examples: ['resetcit']
      },
      ownerOnly: true
    });
  }

  async exec(message) {
    message.channel.bulkDelete("1");
    Citation.deleteMany({}).then(citation => {
      if (citation.deletedCount === 0) {
        return message.channel.send(`Aucune citation n'a été trouvée.`);
      }
      else {
        return message.channel.send(`Toutes les citations ont été supprimées.`);
      }
    }).catch(err => { console.log(`Voici l'erreur ${err}`); });
  }
}

module.exports = ResetCitation;
