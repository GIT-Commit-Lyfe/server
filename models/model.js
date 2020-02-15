'use strict';
module.exports = (sequelize, DataTypes) => {

  const model = sequelize.Sequelize.Model
  class Model extends model {}

  Model.init({
    model_name: DataTypes.STRING,
    BrandId: {
      type: DataTypes.INTEGER,
      // references : {
      //   model : 
      // }
   }
  },{
    sequelize
  })

  Model.associate = function(models) {
    // associations can be defined here
    Model.belongsTo(models.Brand)
  };
  return Model;
};