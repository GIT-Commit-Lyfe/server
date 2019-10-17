'use strict';


module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class City extends Model {}

  City.init({
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  },{
    sequelize
  })


  

  return City;
};