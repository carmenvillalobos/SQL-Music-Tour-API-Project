'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet }) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })
    }
  }

  Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    recommendation: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
  });
  return Band;
};
