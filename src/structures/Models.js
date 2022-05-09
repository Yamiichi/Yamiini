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

const citationSchema = Schema({
  id: String,
  userId: String,
  edit: String,
  citation: String,
  createdAt: String
})

module.exports = {
  Guild: model('Guild', guildSchema),
  User: model('users', userSchema),
  Citation: model('citations', citationSchema)
}