const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PjCategory extends Model {}

// Columns for Project Category Model
PjCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // modelName: 'location'
  }
);

module.exports = PjCategory;
