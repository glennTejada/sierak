'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoanInquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LoanInquiry.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    house_value: DataTypes.INTEGER,
    owing_against: DataTypes.INTEGER,
    amount_requested: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LoanInquiry',
  });
  return LoanInquiry;
};