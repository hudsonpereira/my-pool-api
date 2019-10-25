const Pool = require('../models/pool')

module.exports = {
  index: async (_, res) => {
    try {
      const pools = await Pool.find()
        .populate('alternatives')

      res.send(pools).status(200)
    } catch (error) {
      res.send({}).status(404)
    }
  },

  create: async (req, res) => {
    try {
      const pool = await Pool.create(req.body)

      res.send(pool).status(201)  
    } catch (error) {
      res.send(error).status(422)
    }
  },

  show: async (req, res) => {
    try {
      const pool = await Pool.findById(req.params.id)

      console.log({pool, id: req.params.id})

      res.send(pool).status(200)
    } catch (error) {
      res.send({}).status(404)
    }
  }
}