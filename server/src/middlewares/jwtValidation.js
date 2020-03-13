const expressJwt = require('express-jwt')
const { secret } = require('../config/jwtSecret')
const publicPages = require('./publicPages')

function jwtValidation () {
  return expressJwt({ secret }).unless({
    path: publicPages
  })
}

module.exports = jwtValidation
