'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Caliber extends Model {}

  Caliber.init({
    caliber_name: DataTypes.STRING
  },{
    sequelize
  })

  Caliber.associate = function(models) {
    // associations can be defined here
    Caliber.belongsTo(models.Brand)
  };
  return Caliber;
};