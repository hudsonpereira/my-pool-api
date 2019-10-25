const Alternative = require('../models/alternative')
const Pool = require('../models/pool')

module.exports = {
  index: async (req, res) => {
    try {
      const alternatives = await Alternative.find({})
        .populate('pool')

      res.send(alternatives).status(201)
    } catch (error) {
      res.send(error).status(404)
    }
  },

  create: async (req, res) => {
    try {
      const alternative = await Alternative.create({
        ...req.body,
        pool: req.params.id
      })

      const pool = await Pool.findById(alternative.pool)

      pool.alternatives.push(alternative._id)
      await pool.save()

      res.send(alternative).status(201)
    } catch (error) {
      res.send(error).status(422)
    }
  },

  vote: async (req, res) => {
    try {
      const alternative = await Alternative.findById(req.params.id)

      alternative.votes++;

      await alternative.save()

      res.send(alternative).status(200)
    } catch (error) {
      res.send(error).status(404)
    }
  }
}