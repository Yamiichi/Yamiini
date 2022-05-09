const { Command } = require('discord-akairo');
const { Citation } = require('../../../structures/Models.js');

class AddCitation extends Command{
    constructor() {
        super('addcitation', {
            aliases: ['cit', 'addcitation', 'addcit'],
            category: 'Citation',
            description: {
                content: 'Commande des citations. (500 caractères max)',
                usage: 'cit "<citation>" <@auteur>',
                examples: ['cit "Ce n\'est pas un problème de mon cerveau, c\'est un problème de mon coeur." @copilot', 'citation "Pierre, il sait tellement bien labourer les fesses qu\'il a été nommé meilleur agriculteur de France" @Le Mathématicien']
              },
            ownerOnly: false,
            args: [{ id: 'args', match: 'content'}]
        });
    }

    async exec(message, args) { 
      if (!args.args) { return message.channel.send(`Veuillez entrer une citation.`); }
        let arg = args.args.split('"');
        if (arg.length !== 3) {
          return message.channel.send("L'usage n'est pas correct. Veuillez recommencer la procédure!");
        }
        let citation = arg[1];
        let mention = message.mentions.users.first();
        let citationCount = await Citation.db.collection('citations').countDocuments();
        Citation.create({id: citationCount, userId: mention.id, citation: citation, createdAt: new Date().toLocaleDateString(), edit: message.author.id});
        message.channel.bulkDelete("1");
        let embed = this.client.functions.embed()
          .setAuthor(mention.username, mention.avatarURL())
          .setDescription(`"${citation}" ${new Date().toLocaleDateString()}`);
        return message.channel.send({ embeds: [embed] });
    }
}

module.exports = AddCitation;