const jwt = require('jsonwebtoken')
const jwtSecret = require('../../../config/jwtSecret')

module.exports = async (user) => {
  return jwt.sign(
    {
      userId: user.userId,
      permissions: [user.role]
    },
    jwtSecret.secret,
    { expiresIn: '15m' }
  )
}
