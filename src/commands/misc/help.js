const { stripIndents } = require('common-tags/lib');
const { Command } = require('discord-akairo');

class HelpCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help', 'h'],
      category: 'Misc',
      description: {
        content: 'La commande help renvoie la liste de commande du bot!',
        usage: '(h)elp <command>',
        examples: ['help', 'help ping', 'h info']
      },
      args: [{ id: 'command', type: 'commandAlias' }]
    });
  }

  async exec(message, args) {
    const prefix = await this.handler.prefix(message);
    const command = args.command;

    if (!command) {
      let embed = this.client.functions.embed()
        .setAuthor(
          `Bonjour, mon nom est ${this.client.user.username}!`,
          this.client.user.displayAvatarURL()
        )
        .setDescription(`Retrouvez la liste de toutes mes commandes ci-dessous!
        Si vous avez besoin d'aide, rejoignez [__mon serveur__](https://youtu.be/9M2Ce50Hle8?t=1)
        **--------------**`)

      for (const category of this.handler.categories.values()) {
        embed.addField(
          `☼ ${category.id}`,
          `${category
            .filter(cmd => cmd.aliases.length > 0)
            .map(cmd => `\`${cmd.aliases[0]}\``)
            .join(', ')}`
        )
      }

      embed.addField(
        '--------------',
        `**\`${prefix}help <command>\` pour des infos sur une commande spécifique.**
        Exemples: \`${prefix}help ping\` | \`${prefix} help userinfo\``)

      return message.channel.send({ embeds: [embed] });
    }

    return message.channel.send(stripIndents`
    \`\`\`md
    [Help: Command -> ${command.aliases[0]}]${command.ownerOnly ? '(/!\\ Admin only /!\\)' : ''}

    ${command.description.content}

    #Utilisation: ${prefix}${command.description.usage}
    #Exemples: ${prefix}${command.description.examples.join(` | ${prefix}`)}

    ---

    ${prefix} = prefix du bot.
    () = alias | <> = argument(s) optionnel(s) | [] = argument(s) obligatoire.
    Les caractères ne sont pas à inclure dans vos commandes.
    \`\`\``);
  }
}

module.exports = HelpCommand;