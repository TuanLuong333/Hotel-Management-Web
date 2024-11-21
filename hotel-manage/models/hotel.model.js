// models/Hotel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Hotel = sequelize.define('Hotel', {
    hotel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL(2, 1)
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'Hotel',
    timestamps: false
});

module.exports = Hotel;
 