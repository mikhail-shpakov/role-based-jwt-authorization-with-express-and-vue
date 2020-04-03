'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: '$2y$12$CcZQ.ewuDMF3oFaFatY2y.vYEtwcy/qgCwUnJUlEUKb8j7WWG1pAS', // admin
        role: 'admin',
        userId: 'ea560ead-f1bd-4b9c-a3aa-6aa379abd625',
        refreshToken: null,
        expiresIn: null,
        fingerprint: null,
        ua: null,
        ip: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user',
        password: '$2y$12$XuencavTTnQ3w2Lwsb74dui2GA2ff6uSc1.sfSgk4roPRhp.9UTsm', // user
        role: 'user',
        userId: 'bd1b7a68-011e-4998-af7e-b7d8792cc2f8',
        refreshToken: null,
        expiresIn: null,
        fingerprint: null,
        ua: null,
        ip: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
