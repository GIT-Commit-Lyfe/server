'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Condition extends Model {}

  Condition.init({
    condition_name: DataTypes.STRING
  },{
    sequelize
  })

  Condition.associate = function(models) {
    // associations can be defined here
  };
  return Condition;
};