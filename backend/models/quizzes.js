'use strict';
module.exports = (sequelize, DataTypes) => {
  const quizzes = sequelize.define('quizzes', {
    quizz_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    correct_answer: DataTypes.INTEGER,
    image_link: DataTypes.STRING
  }, {});
  quizzes.associate = function (models) {
    quizzes.belongsTo(models.categories)

  };
  return quizzes;
};