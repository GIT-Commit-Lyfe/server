'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Clasp extends Model {}

  Clasp.init({
    clasp_name: DataTypes.STRING
  },{
    sequelize
  })

  Clasp.associate = function(models) {
    // associations can be defined here
  };
  return Clasp;
};