const app = require('./app')
const expressConfig = require('./config/expressConfig')

app.listen(
  process.env.PORT || expressConfig.port,
  () => console.log(`Server start on port ${expressConfig.port} ...`)
)
