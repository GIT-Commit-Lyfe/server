'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Brand extends Model {}

  Brand.init({
    brand_name: DataTypes.STRING
    
  },{
    sequelize
  })

  Brand.associate = function(models) {
    // associations can be defined here
    // Brand.hasMany(models.Model, { constraints: true, foreignKeyConstraint:true  })
  };
  return Brand;
};

