'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    category_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category_name: DataTypes.STRING
  }, {});
  categories.associate = function (models) {
    categories.hasOne(models.description)
    categories.hasOne(models.quizzes)
  }
  return categories;
};