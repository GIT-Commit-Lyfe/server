'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('References', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reference_number: {
        type: Sequelize.STRING
      },
      power_reserve: {
        type: Sequelize.INTEGER
      },
      number_of_jewel: {
        type: Sequelize.INTEGER
      },
      case_material: {
        type: Sequelize.STRING
      },
      case_diameter: {
        type: Sequelize.STRING
      },
      case_thickness: {
        type: Sequelize.STRING
      },
      water_resistance: {
        type: Sequelize.STRING
      },
      dial_numeral: {
        type: Sequelize.STRING
      },
      glass: {
        type: Sequelize.STRING
      },
      street_name: {
        type: Sequelize.STRING
      },
      lug_width: {
        type: Sequelize.STRING
      },
      instroduce_at: {
        type: Sequelize.INTEGER
      },
      discontinue_at: {
        type: Sequelize.INTEGER
      },
      other_info: {
        type: Sequelize.STRING
      },
      ModelId : {
        allowNull : false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Models', 
          key: 'id', 
       }
      },
      MovementId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movements', 
          key: 'id', 
       }
      },
      CaliberId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'Calibers', 
          key: 'id', 
       }
      },
      BezelMaterialId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'BezelMaterials', 
          key: 'id', 
       }
      },
      DialMaterialId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'DialMaterials', 
          key: 'id', 
       }
      },
      BraceletMaterialId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'BraceletMaterials', 
          key: 'id', 
       }
      },
      BraceletColorId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'BraceletColors', 
          key: 'id', 
       }
      },
      ClaspId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clasps', 
          key: 'id', 
       }
      },
      ClaspMaterialId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'ClaspMaterials', 
          key: 'id', 
       }
      },
      FunctionId : {
        type: Sequelize.INTEGER,
        references: {
          model: 'Functions', 
          key: 'id', 
       }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('References');
  }
};