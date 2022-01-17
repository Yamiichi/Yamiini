const { Guild } = require('./Models');
const { User } = require('./Models');

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

class UsersProvider {

  async getUser(user) {
    const data = await User.findOne({ id: user.id });
    if (data) return data;
  }

  async updateUser(user, settings) {
    let data = await this.getUser(user);
    if (typeof data !== 'object') data = {}
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key]
    }
    return data.updateOne(settings);
  }
}

module.exports = { GuildsProvider, UsersProvider };