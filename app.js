// Dependencies
const express = require('express')

// Config
const app = express()

//Routes
app.get('/', (req, res) => {
  res.send("Welcome to Express Minerals App")
})

//Export
module.exports = app