"use strict"

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({Hello: 'World'})
})

app.get('/api/person/:id', (req, res) => {
  res.json({name: 'Mike'})
})

app.get('/api/people', (req, res) => {
  res.json({name: 'Sam'})
})

app.get('/api/people/:gender', (req, res) => {
  res.json({name: 'Tim'})
})

app.listen(PORT)
