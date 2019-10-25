const mongoose = require('../database')

const poolSchema = new mongoose.Schema({
  title: String,
  alternatives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alternative' }]
})

module.exports = mongoose.model('Pool', poolSchema)