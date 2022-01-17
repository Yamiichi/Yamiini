const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class Sondage extends Command{
    constructor() {
        super('sondage', {
            aliases: ['sondage', 'poll'],
            args: [
                { id: 'args', match: 'content' },
            ]
        });
    }

    async exec(message, args) {
        const q = args.args;
        const embed = new MessageEmbed()
            .setAuthor('Sondage', message.author.displayAvatarURL())
            .setDescription(`\`${q}\``)
            .addFields(
                {
                    name: 'Propositions',
                    value: `🟢 - **Pour**
                        🔷 - **Neutre**
                        🔴 - **Contre**`,
                    inline: true
                })
            .setColor("#0000FF")
            .setFooter(`Commande Poll `, this.client.user.avatarURL())
            .setTimestamp()
        const pollmsg = await message.channel.send({ embed: embed });
        await pollmsg.react("🟢");
        await pollmsg.react("🔷");
        await pollmsg.react("🔴");
    }
}

module.exports = Sondage;