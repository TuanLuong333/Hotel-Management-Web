const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
  },
  nationality: {
    type: DataTypes.STRING(50),
  },
  date_of_birth: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'customer',
  timestamps: false
});

module.exports = Customer;
