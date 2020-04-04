const createAccessToken = require('../login/createAccessToken')
const uuidV4 = require('uuid/v4')
const db = require('../../../db/models')
const Session = db.session

module.exports = async (sessionInfo) => {
  const { userId, ua, ip, fingerprint, User } = sessionInfo
  const accessToken = await createAccessToken({ userId, role: User.role })
  const refreshToken = uuidV4()
  const expiresIn = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000) // 30 дней

  try { // TODO добавить транзакцию
    await Session.create({
      userId: userId,
      refreshToken,
      ua,
      ip,
      fingerprint,
      expiresIn
    })

    return { accessToken, refreshToken }
  } catch (e) {
    console.error(e)
    return { error: 500 }
  }
}
