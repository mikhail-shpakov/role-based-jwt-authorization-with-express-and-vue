const express = require('express')
const router = express.Router()
const guard = require('express-jwt-permissions')()
const validateSchema = require('./validateSchema')
const deleteServer = require('./deleteServer')

router.delete('/server', validateSchema, guard.check('admin'), async (req, res) => {
  const tryDelete = await deleteServer(req.body.id)

  if (!tryDelete) {
    res.sendStatus(500)
    return
  }

  await res.sendStatus(204).end()
})

module.exports = router
