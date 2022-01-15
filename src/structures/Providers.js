const { Guild } = require('./Models');

class GuildsProvider {
  async get(guild) {
    const data = await Guild.findOne({ id: guild.id });
    if (data) return data;
  }

  async update(guild, settings) {
    let data = await this.get(guild);
    if (typeof data !== 'object') data = {}
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key]
    }
    return data.updateOne(settings);
  }
}

module.exports = { GuildsProvider };