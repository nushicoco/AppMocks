/* eslint-disable no-console */
console.log('Starting Server......')

// Config
// require('dotenv-safe').load() // Load env vars from ./.env
console.log(`NODE_ENV =${process.env.NODE_ENV}`)
const port = process.env.PORT
console.log(`Port = ${port}`)

const express = require('express')
const app = express()
module.exports = app // for testing

// POST Body Parsing:
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Routes:
app.use(express.static('client/build'))
require('./routes')(app, __dirname)

// All set!
app.listen(port)
