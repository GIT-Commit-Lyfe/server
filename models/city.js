'use strict';


module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class City extends Model {}

  City.init({
    name: DataTypes.STRING,
    
  },{
    sequelize
  })

  City.associate = function(models) {
    // associations can be defined here

    City.belongsTo(models.Country)
  };

  return City;
};