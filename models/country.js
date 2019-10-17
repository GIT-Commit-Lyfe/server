'use strict';

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Country extends Model {}

  Country.init({
    name: DataTypes.STRING
  },{
    sequelize,
  })

  Country.associate = function(models) {
    // associations can be defined here

    Country.hasMany(models.City)
  };



  return Country;
};  