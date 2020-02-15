'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Calibers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      caliber_name: {
        type: Sequelize.STRING
      },
      BrandId : {
        allowNull : true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Brands', // 'persons' refers to table name
          key: 'id', // 'id' refers to column name in persons table
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
    return queryInterface.dropTable('Calibers');
  }
};