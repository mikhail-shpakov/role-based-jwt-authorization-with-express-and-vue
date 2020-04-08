const express = require('express')
const router = express.Router()
const path = require('path')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'))

router.use('/swagger', swaggerUi.serve)
router.get('/swagger', swaggerUi.setup(swaggerDocument))

module.exports = router
