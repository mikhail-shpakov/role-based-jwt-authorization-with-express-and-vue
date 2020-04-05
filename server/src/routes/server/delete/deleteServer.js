const db = require('../../../db/models/')
const Server = db.servers

module.exports = async (id) => {
  try { // TODO добавить транзакцию
    await Server.destroy({
      where: { id }
    })

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
