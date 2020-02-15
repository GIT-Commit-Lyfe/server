'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class ClaspMaterial extends Model {}

  ClaspMaterial.init({
    material_name: DataTypes.STRING
  },{
    sequelize
  })

  ClaspMaterial.associate = function(models) {
    // associations can be defined here
  };
  return ClaspMaterial;
};