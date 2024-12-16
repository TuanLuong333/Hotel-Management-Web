// models/Booking.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./hotel.model');
const Room = require('./room.model');

const Booking = sequelize.define('Booking', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    guest_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hotel_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Hotel,
            key: 'hotel_id'
        }
    },
    room_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Room,
            key: 'room_id'
        }
    },
    check_in_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    check_out_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('confirm', 'reject'),
        allowNull: true
    }
}, {
    tableName: 'bookings',
    timestamps: false
});

// Quan hệ với Hotel và Room
Booking.belongsTo(Hotel, { foreignKey: 'hotel_id' });
Booking.belongsTo(Room, { foreignKey: 'room_id' });

module.exports = Booking;
