const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const pools = require('./controllers/pools')
const alternatives = require('./controllers/alternatives')

app.use(bodyParser.json())

app.get('/pools', pools.index)
app.get('/pools/:id', pools.show)
app.post('/pools', pools.create)
app.post('/pools/:id/alternatives', alternatives.create)

app.get('/alternatives', alternatives.index)

app.post('/alternatives/:id/vote', alternatives.vote)

app.listen(3000, () => {
  console.log('Listening at 3000')
})