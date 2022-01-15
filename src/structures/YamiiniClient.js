const { embed } = require('../util/functions');
const {AkairoClient, CommandHandler, ListenerHandler} = require("discord-akairo");

module.exports = class YamiiniClient extends AkairoClient {
  constructor(config = {}) {
    super(
      { ownerID: "491489639434289153" },
      {
        allowedMentions: {
          parse: ['roles', 'everyone', 'users'],
          repliedUser: false
        },
        partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
        presence: {
          status: 'online',
          activities: [{
            name: 'my mum in the bathroom',
            type: 'WATCHING'
          }]
          
          
        },
        intents: 32767
      }
    );

    this.commandHandler = new CommandHandler(this, {
      allowMention: true,
      prefix: config.prefix,
      defaultCooldown: 2000,
      directory: './src/commands/'
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: './src/listeners'
    });

    // this.functions.embed()
    this.functions = {
      embed: embed
    }

    this.commandHandler.loadAll();
    this.commandHandler.useListenerHandler(this.listenerHandle);
    this.listenerHandler.loadAll();
  }
}