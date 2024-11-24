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
        type: DataTypes.STRING(255),
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'hotel',
    timestamps: false
});

module.exports = Hotel;
