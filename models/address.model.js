// models/Address.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./hotel.model');  // Liên kết với Hotel

const Address = sequelize.define('Address', {
    address_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address_line1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'addresses',
    timestamps: false
});

// Quan hệ ngược lại: mỗi Address có thể có một khách sạn
// Address.hasOne(Hotel, { foreignKey: 'address_id' });

module.exports = Address;
