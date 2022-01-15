const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    exec(member) {
        console.log(`Bonjour je suis ${member}`);
    }
}

module.exports = ReadyListener;