const express = require('express')
const router = express.Router()
const validateSchema = require('./validateSchema')
const checkSession = require('./checkSession')
const createSession = require('./createSession')

router.post('/auth/refresh-tokens', validateSchema, async (req, res) => {
  const oldSession = await checkSession(req.body)

  if (oldSession.error) {
    await res.sendStatus(oldSession.error)
    return
  }

  const newSession = await createSession(oldSession)

  await res.json({ ...newSession })
})

module.exports = router
