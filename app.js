"use strict"

// Requires
const express = require('express')
const mongoose = require('mongoose')
const Person = require('./db/Name')
const routes = require('./routes/index')

// Variable setup
const app = express()
const PORT = process.env.PORT || 3000

// Database
mongoose.connect(process.env.MLAB_URL || 'mongodb://localhost/people')

app.use('/public', express.static(`${__dirname}/assets`))

// Sets view engine to use Jade
app.set('view engine', 'jade')

// Routes
app.use('/', routes)
app.get('/api/name/:name', routes)
app.get('/api/names', routes)
app.get('/api/names/:gender', routes)

// Starts listening on the set PORT
console.log(`Listening on port: ${PORT}`)
app.listen(PORT)
