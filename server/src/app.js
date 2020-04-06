const express = require('express')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const history = require('connect-history-api-fallback')
const { errors } = require('celebrate')
const jwtValidation = require('./middlewares/jwtValidation')
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

/**
 * Для того, чтобы Swagger работал
 * и при публикации на Heroku и с локальным dev сервером,
 * размещаем роут с ним перед промежуточным обработчиком,
 * который будет отдавать статичное приложение Vue,
 * при публикации на Heroku
 */
app.use(require('./routes/swagger/'))

if (process.env.NODE_ENV === 'production') {
  app.use(history())
  app.use(express.static(path.resolve(__dirname, '../../client/dist')))
}

db.sequelize.sync()
app.use(jwtValidation())
routes(app)
app.use(errors())

module.exports = app
