'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class BezelMaterial extends Model {}

  BezelMaterial.init({
    material_name: DataTypes.STRING
  },{
    sequelize
  })

  BezelMaterial.associate = function(models) {
    // associations can be defined here
  };
  return BezelMaterial;
};