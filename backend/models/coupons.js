'use strict';
module.exports = (sequelize, DataTypes) => {
  const coupons = sequelize.define('coupons', {
    coupon_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    discount_value: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  coupons.associate = function (models) {
    coupons.belongsTo(models.user)
  };
  return coupons;
};