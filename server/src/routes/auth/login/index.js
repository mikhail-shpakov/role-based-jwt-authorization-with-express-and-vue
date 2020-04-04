const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const getUser = require('./getUser')
const createSession = require('./createSession')
const validateSchema = require('./validateSchema')
const useragent = require('express-useragent')

router.post('/auth/login', validateSchema, async (req, res) => {
  const { username, password, fingerprint } = req.body
  const ua = useragent.parse(req.headers['user-agent'])
  const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim()

  const user = await getUser(username)

  if (user.error) {
    await res.sendStatus(user.error)
    return
  }

  await bcrypt.compare(password, user.password, async (error, response) => {
    if (error) console.error(error)

    if (!response) {
      await res.sendStatus(401)
      return
    }

    const sessionInfo = await createSession({ user, ua, ip, fingerprint })

    await res.json({ ...sessionInfo })
  })
})

module.exports = router
