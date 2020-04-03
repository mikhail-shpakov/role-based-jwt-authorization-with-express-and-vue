const db = require('../../../db/models')
const User = db.users

module.exports = async (username) => {
  try {
    const user = await User.findOne({
      attributes: ['username', 'password', 'role', 'userId'],
      where: { username }
    })

    if (!user) return { error: 401 }

    return user.dataValues
  } catch (e) {
    console.error(e)
    return { error: 500 }
  }
}
