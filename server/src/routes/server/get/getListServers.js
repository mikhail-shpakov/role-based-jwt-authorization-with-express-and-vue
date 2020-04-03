const db = require('../../../db/models/')
const Server = db.servers

module.exports = async () => {
  try {
    const servers = await Server.findAll({
      attributes: ['id', 'serverName', 'serverType']
    })

    return servers.map(s => s.dataValues)
  } catch (e) {
    console.log(e)
    return false
  }
}
