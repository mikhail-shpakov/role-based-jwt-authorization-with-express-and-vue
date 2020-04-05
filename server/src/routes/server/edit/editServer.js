const db = require('../../../db/models/')
const Server = db.servers

module.exports = async (row) => {
  const { serverName, serverType, id } = row

  try {
    await Server.update({
      serverName,
      serverType
    }, {
      where: { id }
    })

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
