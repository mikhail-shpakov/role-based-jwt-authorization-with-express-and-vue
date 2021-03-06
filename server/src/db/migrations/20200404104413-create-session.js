'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'userId'
        }
      },
      refreshToken: {
        type: Sequelize.UUID
      },
      ua: {
        type: Sequelize.STRING
      },
      fingerprint: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      expiresIn: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sessions')
  }
}
