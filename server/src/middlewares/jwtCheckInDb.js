const db = require('../db/models')
const User = db.users
const publicPages = require('./publicPages')

async function jwtCheckInDb (req, res, next) {
  const authNotRequired = publicPages.includes(req.path)

  if (authNotRequired) {
    return next()
  }

  const userId = req.user.user_id

  const sqlGetUser = 'SELECT * FROM users WHERE user_id = $1 LIMIT 1;'
  const getUser = await query(sqlGetUser, [userId])

  const tokenInBd = getUser.rows[0].token
  const requestToken = req.headers.authorization.split(' ')[1]

  if (tokenInBd === requestToken) {
    return next()
  }

  res.sendStatus(401)
}

module.exports = jwtCheckInDb
