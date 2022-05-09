const { Command } = require('discord-akairo');
const { Citation } = require('../../../structures/Models.js');

class UpdateCitation extends Command {
  constructor() {
      super('update citation', 
      {
        aliases: ['updatecitation', 'udcitation', 'updatecit', 'udcit', 'modifiercitation', 'modifcitation', 'modifiercit', 'modifcit'],
        category: 'Citation',
        description: {
            content: 'Commande pour mettre à jour une citation.',
            usage: 'ud cit <id> <citation>',
            examples: ['modif citation 1 "Citation à modifier"', 'modif cit 3 "Citation à modifier"']
        },
        ownerOnly: false
      });
  }

  async exec(message) {
    let args = message.content.split(' ');
    let id = args[1];
    let citation = args.slice(2).join(' ');
    message.channel.bulkDelete("1");
    if (!id) {
      return message.channel.send(`Veuillez entrer un id de citation.`);
    }
    if (!citation) {
      return message.channel.send("Veuillez entrer une citation.");
    }
    let citations = await Citation.where('userId').equals(message.author.id).find();
    for (let index = 0; citations.length > index; index++) {
      if (id === citations[index].id) {
        Citation.updateOne({id: id}, {citation: citation}).then(citation => {
          if (citation.modifiedCount === 0) {
            return message.channel.send(`Aucune citation n'a été trouvée.`);
          }
          else {
            return message.channel.send(`La citation N°${id} \`(anciennement ${citations[index].citation})\` a été mise à jour.`);
          }
        }).catch(err => {console.log(`Voici l'erreur ${err}`)});
      }
    }
    citations = await Citation.where('edit').equals(message.author.id).find();
    for (let index = 0; citations.length > index; index++) {
      if (id === citations[index].id) {
        Citation.updateOne({id: id}, {citation: citation}).then(citation => {
          if (citation.modifiedCount === 0) {
            return message.channel.send(`Aucune citation n'a été trouvée.`);
          }
          else {
            return message.channel.send(`La citation N°${id} \`(anciennement ${citations[index].citation})\` a été mise à jour.`);
          }
        }).catch(err => {console.log(`Voici l'erreur ${err}`)});
      }
    }
    if (id.length === 0) {
      return message.channel.send("L'usage n'est pas correct. Veuillez recommencer la procédure!");
    }
    return message.channel.send("La citation que vous vouliez modifier n'existe pas ou ne vous appartient pas.");
  }
}
  
module.exports = UpdateCitation;