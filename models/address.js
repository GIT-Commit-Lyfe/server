'use strict';

module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Address extends Model {}

  Address.init({
    address_line: DataTypes.STRING,
    postal_code: DataTypes.STRING
  },{
    sequelize
  })

  Address.associate = function(models) {
    // associations can be defined here

    Address.belongsTo(models.City, { constraints: true, foreignKeyConstraint:true  })
  };



  

  return Address;
};