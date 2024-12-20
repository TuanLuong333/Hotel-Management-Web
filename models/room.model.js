// models/Room.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./hotel.model');

const Room = sequelize.define('Room', {
    room_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hotel_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Hotel,
            key: 'hotel_id'
        }
    },
    room_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room_type: {
        type: DataTypes.ENUM('Single', 'Double', 'Suite', 'Family', 'Luxury'),
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Available', 'Booked', 'Maintenance'),
        allowNull: false,
        defaultValue: 'Available'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2), // Khai báo cột price
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'rooms',
    timestamps: false
});

// Quan hệ với Hotel
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

module.exports = Room;
