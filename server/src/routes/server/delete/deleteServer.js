const db = require('../../../db/models/')
const Server = db.servers

module.exports = async (id) => {
  try {
    return await db.sequelize.transaction(async (t) => {
      await Server.destroy({
        where: { id }
      }, { transaction: t })

      return true
    })
  } catch (e) {
    console.log(e)
    return false
  }
}
