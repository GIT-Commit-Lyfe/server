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

   let cities = [
    {
      id : 1,
      name : "Jakarta",
      CountryId : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ]

  let countries = [
    {
      id : 1,
      name : "Indonesia",
      createdAt : new Date(),
      updatedAt : new Date() 

    }
  ]

  let bulkData = [queryInterface.bulkInsert('Countries', countries), queryInterface.bulkInsert('Cities', cities)]


  return Promise.all(bulkData)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   let bulkDelete = [
     queryInterface.bulkDelete("Cities", null, {}),
     queryInterface.bulkDelete("Countries", null, {})
   ]

   return Promise.all(bulkDelete)
  }
};
