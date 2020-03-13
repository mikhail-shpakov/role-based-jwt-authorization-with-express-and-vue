'use strict'
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    userId: DataTypes.UUID,
    serverName: DataTypes.STRING,
    serverType: DataTypes.STRING
  }, {})
  Server.associate = function (models) {
  }
  return Server
}