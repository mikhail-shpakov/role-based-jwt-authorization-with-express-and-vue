'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Servers', [{
      serverName: 'Супер сервер',
      serverType: 'vds',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Servers', null, {})
  }
}
