'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Accompany extends Model {}

  Accompany.init({
    accompany_name: DataTypes.STRING
  },{
    sequelize
  })

  Accompany.associate = function(models) {
    // associations can be defined here
  };
  return Accompany;
};