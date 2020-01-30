'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    location_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    city: DataTypes.STRING,
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    telephone: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  locations.associate = function (models) {
    // associations can be defined here
  };
  return locations;
};