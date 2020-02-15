'use strict';
module.exports = (sequelize, DataTypes) => {
  const Function = sequelize.define('Function', {
    function_name: DataTypes.STRING
  }, {});
  Function.associate = function(models) {
    // associations can be defined here
  };
  return Function;
};