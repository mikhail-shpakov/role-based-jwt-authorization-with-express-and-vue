'use strict'
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    userId: DataTypes.UUID,
    refreshToken: DataTypes.STRING,
    ua: DataTypes.STRING,
    fingerprint: DataTypes.STRING,
    ip: DataTypes.STRING,
    expiresIn: DataTypes.INTEGER
  }, {})
  Session.associate = function (models) {
    // associations can be defined here
  }
  return Session
}
