const { Schema, model } = require('mongoose');

const guildSchema = Schema({
  id: String,
  prefix: {
    type: String,
    default: 'Y$'
  }
});

module.exports = {
  Guild: model('Guild', guildSchema)
};