const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

router.use('/swagger', swaggerUi.serve)
router.get('/swagger', swaggerUi.setup(swaggerDocument))

module.exports = router
