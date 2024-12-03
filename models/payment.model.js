// models/Payment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Booking = require('./booking.model');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    booking_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Booking,
            key: 'booking_id'
        }
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    payment_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Completed', 'Cancelled'),
        allowNull: false,
        defaultValue: 'Pending'
    }
}, {
    tableName: 'payments',
    timestamps: false
});

// Quan hệ với Booking
Payment.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = Payment;
