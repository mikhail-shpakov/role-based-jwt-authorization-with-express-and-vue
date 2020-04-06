const db = require('../../../db/models/')
const Server = db.servers

module.exports = async (row) => {
  const { serverName, serverType } = row

  try {
    return await db.sequelize.transaction(async (t) => {
      const newServer = await Server.create({
        serverName,
        serverType
      }, { transaction: t })

      return newServer.dataValues.id
    })
  } catch (e) {
    console.log(e)
    return false
  }
}
