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
        allowNull: false,
        references: {
            model: Booking,
            key: 'booking_id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'failed'),
        allowNull: false
    },
    method: {
        type: DataTypes.ENUM('credit_card', 'paypal', 'cash'),
        allowNull: false
    }
}, {
    tableName: 'payment',
    timestamps: false
});

// Thiết lập quan hệ
Booking.hasMany(Payment, { foreignKey: 'booking_id' });
Payment.belongsTo(Booking, { foreignKey: 'booking_id' });

module.exports = Payment;
