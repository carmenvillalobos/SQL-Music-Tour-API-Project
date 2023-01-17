'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
      static associate({ Band }) {
        // band
        MeetGreet.belongsTo(Band, {
          foreignKey: "band_id",
          as: "band"
      })
    }
  }

  MeetGreet.init({
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MeetGreet',
  });
  return MeetGreet;
};
