'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class BraceletColor extends Model {}

  BraceletColor.init({
    color_name: DataTypes.STRING
  },{
    sequelize
  })
 
  BraceletColor.associate = function(models) {
    // associations can be defined here
  };
  return BraceletColor;
};