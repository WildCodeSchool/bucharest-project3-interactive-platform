'use strict';
module.exports = (sequelize, DataTypes) => {
  const description = sequelize.define('description', {
    description_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: DataTypes.STRING,
    link: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});
  description.associate = function (models) {
    description.belongsTo(models.categories)
  };
  return description;
};