'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let roles = [
      {
        id : 1,
        role_name : "admin",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        role_name : "customer",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]

    return queryInterface.bulkInsert('Roles', roles)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Roles', null, {})
  }
};
