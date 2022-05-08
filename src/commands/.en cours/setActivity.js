const { Command } = require('discord-akairo');
const { ACTIVITY, prefix } = require('../../util/config');
  
class SetActivity extends Command {
  constructor() {
    super('setactivity', {
      aliases: ['setactivity', 'setact', 'act', 'activity', 'actreset'],
      category: 'Dev',
      description: {
        content: 'Commande pour changer l\'activité du bot.',
        usage: 'setactivity <activité>',
        examples: ['setactivity "Je suis un bot de test"', 'setactivity "Je suis un bot de test"'],
      },
      ownerOnly: true
    });
  }

  async exec(message) {
    let args = message.content.split(' ');
    if (args.slice(0)[0] === `${prefix}actreset` && args.slice(0)[1] === undefined) {
      this.client.user.setActivity(ACTIVITY);
      return message.channel.send(`L'activité a été réinitialisée.`);
    }
    else if (args.slice(0)[1] !== undefined && args.slice(0)[0] !== `${prefix}actreset`) {
      let act = args.slice(1).join(' ');
      this.client.user.setActivity({type: 'PLAYING', name: act});
      return message.channel.send(`Activité du bot : ${act}`);
    }
    else {
      return message.channel.send(`Veuillez entrer une activité.`);
    }
  }
}

module.exports = SetActivity;