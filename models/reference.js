'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize
  class Reference extends Model {}

  Reference.init({
    reference_number: DataTypes.STRING,
    power_reserve: DataTypes.INTEGER,
    number_of_jewel: DataTypes.INTEGER,
    case_material: DataTypes.STRING,
    case_diameter: DataTypes.STRING,
    case_thickness: DataTypes.STRING,
    water_resistance: DataTypes.STRING,
    dial_numeral: DataTypes.STRING,
    glass: DataTypes.STRING,
    street_name: DataTypes.STRING,
    lug_width: DataTypes.STRING,
    instroduce_at: DataTypes.INTEGER,
    discontinue_at: DataTypes.INTEGER,
    other_info: DataTypes.STRING
  },{
    sequelize
  })

  Reference.associate = function(models) {
    // associations can be defined here
    Reference.belongsTo(models.Model)
    Reference.belongsTo(models.Movement)
    Reference.belongsTo(models.Caliber)
    Reference.belongsTo(models.BezelMaterial)
    Reference.belongsTo(models.DialMaterial)
    Reference.belongsTo(models.BraceletMaterial)
    Reference.belongsTo(models.BraceletColor)
    Reference.belongsTo(models.Clasp)
    Reference.belongsTo(models.ClaspMaterial)
    Reference.belongsTo(models.Function)
  };

  
  return Reference;
};