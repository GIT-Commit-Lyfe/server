'use strict';
const { hashPassword } = require("../helpers/encryption")

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class User extends Model {}

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    isVerified : DataTypes.BOOLEAN
  },{
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
      },
    
    },
  })

  User.associate = function(models) {
    // associations can be defined here
    User.Address = User.belongsTo(models.Address)
    User.Role = User.belongsTo(models.Role)
    //User.belongsTo(models.Role)
  };



  
  return User;
};