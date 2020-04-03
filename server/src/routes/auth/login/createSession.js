const createAccessToken = require('./createAccessToken')
const uuidV4 = require('uuid/v4')
const db = require('../../../db/models')
const Session = db.session

module.exports = async (sessionInfo) => {
  const { user, ua, ip, fingerprint } = sessionInfo
  const accessToken = await createAccessToken(user)
  const refreshToken = uuidV4()

  try { // TODO добавить транзакцию
    await Session.create({
      userId: user.userId,
      refreshToken,
      ua: ua.source,
      ip,
      fingerprint
    })

    return { accessToken, refreshToken }
  } catch (e) {
    console.error(e)
    return { error: 500 }
  }
}
