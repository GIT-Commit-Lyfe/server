'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CityId : {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities', // 'persons' refers to table name
          key: 'id', // 'id' refers to column name in persons table
       }
      },
      address_line: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};