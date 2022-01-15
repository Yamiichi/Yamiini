const { Command } = require('discord-akairo');

class UserInfoCommand extends Command {
  constructor() {
    super('userinfo', {
      aliases: ['userinfo', 'info'],
      description: 'Affiche les info de l\'user',
      handleEdits: true,
      ignoreCooldown: '491489639434289153',
      ignorePermissions: '491489639434289153',
      userPermissions: 'KICK_MEMBERS',
      clientPermissions: 'KICK_MEMBERS',
      ratelimit: 2,
      cooldown: 5000,
      typing: false,
      ownerOnly: true,
      channel: 'guild',
      // args: [
      //   { id: 'firstArgs', match: 'content' },
      // ],
      // separator: '|'
      args: [
        { id: 'member', type: 'member', default: message => message.member },
      ]
    });
  }

  exec(message, args) {
    return message.channel.reply({
      embeds: [
        this.client.functions.embed()
          .setTitle(`${args.member.displayName} (${args.member.id})`)
          .setThumbnail(args.member.user.displayAvatarURL())
          .setDescription(`Son compte a été crée le ${args.member.user.createdAt}`)
      ]
    });
  }
}

module.exports = UserInfoCommand;