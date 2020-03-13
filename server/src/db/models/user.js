'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    userId: DataTypes.UUID,
    refreshToken: DataTypes.STRING,
    expiresIn: DataTypes.INTEGER,
    fingerprint: DataTypes.STRING,
    ua: DataTypes.STRING,
    ip: DataTypes.STRING
  }, {})
  User.associate = function (models) {
  }
  return User
}