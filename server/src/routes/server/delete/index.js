const express = require('express')
const router = express.Router()
const validateSchema = require('./validateSchema')
const deleteServer = require('./deleteServer')

router.delete('/server', validateSchema, async (req, res) => {
  const tryDelete = await deleteServer(req.body.id)

  if (!tryDelete) {
    res.sendStatus(500)
    return
  }

  await res.sendStatus(204).end()
})

module.exports = router
