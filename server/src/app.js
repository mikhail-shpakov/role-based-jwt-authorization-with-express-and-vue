const express = require('express')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { errors } = require('celebrate')
const jwtValidation = require('./middlewares/jwtValidation')
// const jwtCheckInDb = require('./middlewares/jwtCheckInDb')
const routes = require('./routes')
const limiter = require('./config/rateLimitConfig')
const app = express()
const db = require('./db/models')

if (process.env.NODE_ENV === 'production') {
  /**
   * При публикации на heroku,
   * статичное приложение vue будет отдавать express
   */
  app.use(express.static(path.resolve(__dirname, '../../client/dist')))
}

app.set('trust proxy', 1)
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(limiter)
db.sequelize.sync()
app.use(jwtValidation())
// app.use(jwtCheckInDb)
routes(app)
app.use(errors())

module.exports = app
