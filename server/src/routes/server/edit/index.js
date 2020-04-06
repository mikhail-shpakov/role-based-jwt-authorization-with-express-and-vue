const express = require('express')
const router = express.Router()
const guard = require('express-jwt-permissions')()
const validateSchema = require('./validateSchema')
const editServer = require('./editServer')

router.patch('/server/', validateSchema, guard.check('admin'), async (req, res) => {
  const edit = await editServer(req.body)

  if (!edit) {
    res.sendStatus(500)
    return
  }

  await res.sendStatus(204).end()
})

module.exports = router
