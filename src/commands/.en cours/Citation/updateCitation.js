const { Command } = require('discord-akairo');

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

  exec() {
      
  }
}
  
module.exports = UpdateCitation;