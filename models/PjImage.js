const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PjImage extends Model {}

// Columns for Project Category Model
PjImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    img_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caption: {
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

module.exports = PjImage;