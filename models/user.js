'use strict';


module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class User extends Model {}

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
  },{
    sequelize
  })

  User.associate = function(models) {
    // associations can be defined here
    User.Address = User.belongsTo(models.Address, {foreignKey : "addressId"})
  };



  
  return User;
};