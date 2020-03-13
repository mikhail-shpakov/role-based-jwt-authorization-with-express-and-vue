const db = require('../../../db/models')
const User = db.users

module.exports = async (username) => {
  try {
    const user = await User.findOne({
      attributes: ['username', 'password', 'role', 'userId'],
      where: { username }
    })

    return user.dataValues
  } catch (e) {
    console.log(e)
    return false
  }
}
