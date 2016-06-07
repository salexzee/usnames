'use strict'
const express = require('express')
const router = express.Router()
const Person = require('../db/Person')

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'U.S. Names API'
  })
})

router.get('/api/name/:name', (req, res, next) => {
  Person.findOne({_id: req.params.name}, (err, person) => {
    if(err) res.redirect('/')
    res.json(person)
  })
})

router.get('/api/names', (req, res, next) => {
  Person.find()
    .sort({name: 'asc'})
    .exec((err, people) => {
      if (err) res.redirect('/')
      res.json(people)
    })
})

router.get('/api/names/:gender', (req, res, next) => {
  Person.find({gender: req.params.gender})
    .sort({name: 'asc'})
    .exec((err, people) => {
      if (err) res.redirect('/')
      res.json(people)
    })
})


module.exports = router
