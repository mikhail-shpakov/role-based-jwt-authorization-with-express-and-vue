const express = require('express')
const router = express.Router()

router.get('/auth/logout', async (req, res) => {
  await res.end()
})

module.exports = router
