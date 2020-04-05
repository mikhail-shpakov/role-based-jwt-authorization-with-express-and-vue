const express = require('express')
const router = express.Router()
const validateSchema = require('./validateSchema')
const editServer = require('./editServer')

router.patch('/server/', validateSchema, async (req, res) => {
  const edit = await editServer(req.body)

  if (!edit) {
    res.sendStatus(500)
    return
  }

  await res.sendStatus(204).end()
})

module.exports = router
