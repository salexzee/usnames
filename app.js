"use strict"

// Requires
const express = require('express')
const mongoose = require('mongoose')
const Person = require('./db/Person')
const routes = require('./routes/index')

// Variable setup
const app = express()
const PORT = process.env.PORT || 3000

// Database
mongoose.connect('mongodb://localhost/people')

// Sets view engine to use Jade
app.set('view engine', 'jade')

// Routes
app.use('/', routes)
app.get('/api/person/:id', routes)
app.get('/api/people', routes)
app.get('/api/people/:gender', routes)

// Starts listening on the set PORT
console.log(`Listening on port: ${PORT}`)
app.listen(PORT)
