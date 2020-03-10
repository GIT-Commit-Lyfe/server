'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Boutique extends Model {}

  Boutique.init({
    boutique_name: DataTypes.STRING
  },{
    sequelize
  })
 
  Boutique.associate = function(models) {
    // associations can be defined here
    Boutique.belongsTo(models.User)
    Boutique.belongsTo(models.Address)
  };
  return Boutique;
};