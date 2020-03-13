const jwt = require('jsonwebtoken')
const jwtSecret = require('../../../config/jwtSecret')

module.exports = async (user) => {
  const token = jwt.sign(
    {
      userId: user.userId,
      permissions: [user.role]
    },
    jwtSecret.secret,
    { expiresIn: '4h' }
  )

  // TODO сохранять в БД токен

  return token
}
