'use strict'
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    serverName: DataTypes.STRING,
    serverType: DataTypes.STRING
  }, {})
  Server.associate = function (models) {
    // associations can be defined here
  }
  return Server
}
