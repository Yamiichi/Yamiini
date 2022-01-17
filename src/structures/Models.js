const { Schema, model } = require('mongoose');

const guildSchema = Schema({
  id: String,
  prefix: {
    type: String,
    default: 'Y$'
  },
  name: {
    type: String,
    default: ''
  }
})

const userSchema = Schema({
  id: String,
  username: {
    type: String,
    default: ''
  },
  genshinUrl: {
    type: String,
    default: ''
  }
})

module.exports = {
  Guild: model('Guild', guildSchema),
  User: model('users', userSchema)
};