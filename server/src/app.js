const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { errors } = require('celebrate')
const routes = require('./routes')
const limiter = require('./config/rateLimitConfig')
const app = express()
const db = require('./db/models')

app.set('trust proxy', 1)
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(limiter)
db.sequelize.sync()
routes(app)
app.use(errors())

module.exports = app
