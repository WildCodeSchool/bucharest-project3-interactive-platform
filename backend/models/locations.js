'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    location_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    text: DataTypes.STRING
  }, {});
  locations.associate = function (models) {
    // associations can be defined here
  };
  return locations;
};