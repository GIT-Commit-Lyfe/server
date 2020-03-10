'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Boutiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boutique_name: {
        type: Sequelize.STRING
      },
      UserId : {
        allowNull : false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'id', 
       }
      },
      AddressId : {
        allowNull : false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses', 
          key: 'id', 
       }
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
    return queryInterface.dropTable('Boutiques');
  }
};