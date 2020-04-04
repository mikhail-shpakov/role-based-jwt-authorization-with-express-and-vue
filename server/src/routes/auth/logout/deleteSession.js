const db = require('../../../db/models')
const { Session, User } = db
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function deleteSession (refreshToken) { // TODO добавить транзакцию
  /**
   * Удаляем сессию из БД
   * и возвращаем информацию об этой сессии
   * и о пользователе, которому она принадлежит
   */
  return Session.findOne({
    attributes: ['userId', 'refreshToken', 'ua', 'fingerprint', 'ip', 'expiresIn'],
    where: { refreshToken },
    include: [{
      model: User,
      attributes: ['role'],
      where: {
        userId: { [Op.col]: 'Session.userId' }
      }
    }]
  }).then((result) => {
    return Session.destroy({
      where: { refreshToken }
    }).then(() => result)
  })
}

module.exports = async (refreshToken) => {
  try {
    const session = await deleteSession(refreshToken)

    if (!session) return { error: 401 }

    return session.dataValues
  } catch (e) {
    console.error(e)
    return { error: 500 }
  }
}
