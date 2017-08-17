/* eslint-disable no-console */
console.log('Starting Server......')

// Config
console.log(`NODE_ENV =${process.env.NODE_ENV}`)
const port = process.env.PORT || 3001
console.log(`Port = ${port}`)

const express = require('express')
const app = express()

// POST Body Parsing:
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Routes:
app.use(express.static('client/build'))
require('./routes')(app, __dirname)

// All set!
app.listen(port)
