const express = require('express')
const router = express.Router()
const guard = require('express-jwt-permissions')()
const validateSchema = require('./validateSchema')
const addServer = require('./addServer')

router.post('/server/', validateSchema, guard.check('admin'), async (req, res) => {
  const returnIdNewServer = await addServer(req.body)

  if (!returnIdNewServer) {
    res.sendStatus(500)
    return
  }

  await res.json({ id: returnIdNewServer })
})

module.exports = router
