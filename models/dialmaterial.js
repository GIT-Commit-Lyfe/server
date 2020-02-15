'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class DialMaterial extends Model {}

  DialMaterial.init({
    material_name: DataTypes.STRING
  },{
    sequelize
  })

  DialMaterial.associate = function(models) {
    // associations can be defined here
  };
  return DialMaterial;
};