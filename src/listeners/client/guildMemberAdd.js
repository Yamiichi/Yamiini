const { Listener } = require('discord-akairo');

class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    exec(member) {
        console.log(`Bonjour je suis ${member.user.username}.`);
    }
}

module.exports = GuildMemberAddListener;