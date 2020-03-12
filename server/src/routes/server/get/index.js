const express = require('express')
const router = express.Router()
// const getListServers = require('./getListServers')

router.get('/server', async (req, res) => {
  // const list = await getListServers()
  //
  // if (!list) res.sendStatus(500)
  //
  const list = [{
    server_name: 123,
    server_type: 'vds',
    user_id: 1
  }]

  await res.json(list)
})

module.exports = router
