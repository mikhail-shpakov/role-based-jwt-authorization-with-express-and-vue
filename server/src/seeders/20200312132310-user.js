'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'User',
      password: 'test',
      role: 'admin',
      userId: 'ea560ead-f1bd-4b9c-a3aa-6aa379abd625',
      refreshToken: null,
      expiresIn: null,
      fingerprint: null,
      ua: null,
      ip: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
