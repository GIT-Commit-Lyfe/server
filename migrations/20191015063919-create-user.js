'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      RoleId : {
        allowNull : false,
        type :  Sequelize.INTEGER,
        references: {
          model: 'Roles', // 'persons' refers to table name
          key: 'id', // 'id' refers to column name in persons table
       }
      },
      AddressId : {
        allowNull : false,
        type :  Sequelize.INTEGER
      },
      isVerified : {
        allowNull : false,
        type : Sequelize.BOOLEAN,
        defaultValue : false
      },
      loginPIN : {
        type : Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};