const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Example extends Model {}

// Columns for Project Category Model
Example.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    the_project: {
      type: DataTypes.STRING,
      allowNull: false
    },
    the_challenge: {
      type: DataTypes.STRING,
      allowNull: false
    },
    the_solution: {
      type: DataTypes.STRING,
      allowNull: false
    },
    the_results: {
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

module.exports = Example;