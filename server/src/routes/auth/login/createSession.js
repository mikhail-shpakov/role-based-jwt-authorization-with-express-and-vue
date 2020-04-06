const createAccessToken = require('./createAccessToken')
const uuidV4 = require('uuid/v4')
const db = require('../../../db/models')
const Session = db.session

module.exports = async (sessionInfo) => {
  const { user, ua, ip, fingerprint } = sessionInfo
  const accessToken = await createAccessToken(user)
  const refreshToken = uuidV4()
  const expiresIn = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000) // 30 дней

  try {
    return await db.sequelize.transaction(async (t) => {
      await Session.create({
        userId: user.userId,
        refreshToken,
        ua: ua.source,
        ip,
        fingerprint,
        expiresIn
      }, { transaction: t })

      return { accessToken, refreshToken }
    })
  } catch (e) {
    console.error(e)
    return { error: 500 }
  }
}
