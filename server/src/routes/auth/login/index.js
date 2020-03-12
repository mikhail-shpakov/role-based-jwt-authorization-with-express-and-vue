const express = require('express')
const router = express.Router()

router.post('/auth/login', async (req, res) => {
  await res.end()
})

module.exports = router
