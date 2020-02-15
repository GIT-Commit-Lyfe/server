'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Product extends Model {}

  Product.init({
    year: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    top_image: DataTypes.STRING,
    crown_side_image: DataTypes.STRING,
    case_back_image: DataTypes.STRING,
    show_off_image: DataTypes.STRING
  },{
    sequelize
  })

  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Condition)
    Product.belongsTo(models.Reference)
    Product.belongsTo(models.Accompany)
    //Product.belongsTo(models.Boutique)
  };
  return Product;
};