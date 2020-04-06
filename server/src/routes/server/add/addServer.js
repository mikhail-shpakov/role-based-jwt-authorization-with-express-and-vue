const db = require('../../../db/models/')
const Server = db.servers

module.exports = async (row) => {
  const { serverName, serverType } = row

  try { // TODO добавить транзакцию
    const newServer = await Server.create({
      serverName,
      serverType
    })

    return newServer.dataValues.id
  } catch (e) {
    console.log(e)
    return false
  }
}
