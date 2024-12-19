// models/Service.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./hotel.model'); // Import Hotel model
const Booking = require('./booking.model'); // Import Booking model

const Service = sequelize.define('Service', {
    service_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Hotel,
            key: 'hotel_id'
        },
        onDelete: 'CASCADE'
    },
    service_name: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Booking,
            key: 'booking_id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'services',
    timestamps: false
});

// Establish associations
Service.belongsTo(Hotel, { foreignKey: 'hotel_id' });
Service.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = Service;
