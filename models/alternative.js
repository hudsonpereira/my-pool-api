const mongoose = require('../database')

const alternativeSchema = new mongoose.Schema({
  description: String,
  votes: {
    type: Number,
    default: 0
  },
  pool: { type: mongoose.Schema.Types.ObjectId, ref: 'Pool' }
})

module.exports = mongoose.model('Alternative', alternativeSchema)