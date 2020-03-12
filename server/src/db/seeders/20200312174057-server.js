'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Servers', [{
      userId: 'ea560ead-f1bd-4b9c-a3aa-6aa379abd625',
      serverName: 'testik',
      serverType: 'vds',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Servers', null, {})
  }
}
