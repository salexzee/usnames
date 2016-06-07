'use strict'
const mongoose = require('mongoose')

const NameSchema = new mongoose.Schema({
  name: String,
  gender: String
})

const Name = mongoose.model('Name', NameSchema)

module.exports = Name
