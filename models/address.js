'use strict';

module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Address extends Model {}

  Address.init({
    cityId: DataTypes.INTEGER,
    address_line: DataTypes.STRING,
    postal_code: DataTypes.STRING
  },{
    sequelize
  })

  

  return Address;
};