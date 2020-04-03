const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const getUser = require('./getUser')
const setToken = require('./setToken')
const validateSchema = require('./validateSchema')
// const useragent = require('express-useragent')

router.post('/auth/login', validateSchema, async (req, res) => {
  const { username, password } = req.body
  // const ua = useragent.parse(req.headers['user-agent'])
  // console.log(ua)

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

    const token = await setToken(user)

    await res.json({ token })
  })
})

module.exports = router
