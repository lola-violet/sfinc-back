const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ImgTag extends Model {}

// Columns for Project Category Model
ImgTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
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

module.exports = ImgTag;