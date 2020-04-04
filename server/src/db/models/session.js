'use strict'
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    userId: DataTypes.UUID,
    refreshToken: DataTypes.UUID,
    ua: DataTypes.STRING,
    fingerprint: DataTypes.STRING,
    ip: DataTypes.STRING,
    expiresIn: DataTypes.DATE
  }, {})
  Session.associate = function (models) {
    Session.belongsTo(models.User, { targetKey: 'userId', foreignKey: 'userId' })
  }

  return Session
}
