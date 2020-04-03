const rateLimit = require('express-rate-limit')

/**
 * 100 запросов в 5 минут
 */
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100
})

module.exports = limiter
