'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: DataTypes.UUID,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {})
  User.associate = function (models) {
    User.hasMany(models.Session, { foreignKey: 'userId' })
  }

  return User
}
