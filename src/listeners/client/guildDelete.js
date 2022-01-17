const { Listener } = require("discord-akairo");
const { Guild } = require("../../structures/Models");

class GuildDeleteListener extends Listener {
    constructor() {
        super('guildDelete', {
            emitter: 'client',
            event: 'guildDelete',
        });
    }

    async exec(guild) {
        await Guild.deleteOne({ id: guild.id })
          .then(res => {
            console.log(res);
          })
    }
}
module.exports = GuildDeleteListener;