const express = require('express')
const router = express.Router()
const getListServers = require('./getListServers')

router.get('/server', async (req, res) => {
  const list = await getListServers()

  if (!list) {
    res.sendStatus(500)
    return
  }

  res.set('Cache-Control', 'no-cache')

  await res.json(list)
})

module.exports = router
