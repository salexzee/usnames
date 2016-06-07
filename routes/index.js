'use strict'
const express = require('express')
const router = express.Router()
const Person = require('../db/Person')

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'U.S. Names API'
  })
})

router.get('/api/person/:id', (req, res, next) => {
  res.json({name: 'Mike'})
})

router.get('/api/people', (req, res, next) => {
  res.json({name: 'Sam'})
})

router.get('/api/people/:gender', (req, res, next) => {
  res.json({name: 'Tim'})
})


module.exports = router
