const db = require('../../../db/models/')
const Server = db.servers

module.exports = async (row) => {
  const { serverName, serverType, id } = row

  try {
    return await db.sequelize.transaction(async (t) => {
      await Server.update({
        serverName,
        serverType
      }, {
        where: { id }
      }, { transaction: t })

      return true
    })
  } catch (e) {
    console.log(e)
    return false
  }
}
