const express = require('express')
const router = express.Router()
const validateSchema = require('./validateSchema')
const deleteSession = require('./deleteSession')

router.post('/auth/logout', validateSchema, async (req, res) => {
  const { refreshToken } = req.body

  const sessionInDB = await deleteSession(refreshToken)

  if (sessionInDB.error) {
    await res.sendStatus(sessionInDB.error)
    return
  }

  await res.end()
})

module.exports = router
