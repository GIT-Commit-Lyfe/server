'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class BraceletMaterial extends Model {}

  BraceletMaterial.init({
    material_name: DataTypes.STRING
  },{
    sequelize
  })
  BraceletMaterial.associate = function(models) {
    // associations can be defined here
  };
  return BraceletMaterial;
};