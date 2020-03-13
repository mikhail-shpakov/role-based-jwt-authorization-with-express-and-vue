const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const getUser = require('./getUser')
const setToken = require('./setToken')
const validateSchema = require('./validateSchema')

router.post('/auth/login', validateSchema, async (req, res) => {
  const { username, password } = req.body

  const user = await getUser(username)

  if (!user) {
    await res.sendStatus(401)
    return
  }

  await bcrypt.compare(password, user.password, async (error, response) => {
    if (error) {
      throw error
    }

    if (!response) {
      await res.sendStatus(401)
      return
    }

    const token = await setToken(user)

    await res.json({ token })
  })
})

module.exports = router
