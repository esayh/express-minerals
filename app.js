// Dependencies
const express = require('express')
const rocks = require('./models/rocks.js')

// Config
const app = express()

//Routes
app.get('/', (req, res) => {
  res.send("Welcome to Express Minerals App")
})

app.get('/rocks', (req, res) => {
  res.send(rocks)
})

app.get('/rocks/:index', (req, res) => {
  const { index } = req.params
  res.send(rocks[index])
})

//Export
module.exports = app