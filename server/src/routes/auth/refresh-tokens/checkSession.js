const getAndDeleteSession = require('../logout/deleteSession')

module.exports = async (sessionInfo) => {
  const sessionInDB = await getAndDeleteSession(sessionInfo.refreshToken)

  if (sessionInDB.error) return sessionInDB

  if (Math.round(sessionInDB.expiresIn) < Date.now()) return { error: 401 }
  if (sessionInDB.fingerprint !== sessionInfo.fingerprint) return { error: 401 }

  return sessionInDB
}
