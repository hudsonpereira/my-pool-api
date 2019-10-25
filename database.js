const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/my_pool', { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose