const { Listener } = require('discord-akairo');

class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    exec(member, guild) {
        console.log(`Bonjour je suis ${member.user.username}. J'ai rejoint ${guild.name}.`);
    }
}

module.exports = GuildMemberAddListener;