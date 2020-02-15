'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Movement extends Model {}

  Movement.init({
    movement_name: DataTypes.STRING
  },{
    sequelize
  })

  Movement.associate = function(models) {
    // associations can be defined here
  };
  return Movement;
};