// models/Employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./hotel.model');

const Employee = sequelize.define('Employee', {
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_number: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    position: {
        type: DataTypes.ENUM('Manager', 'Receptionist', 'Housekeeper', 'Chef', 'Security', 'Maintenance', 'Other'),
        allowNull: false,
        defaultValue: 'Other'
    },
    hotel_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Hotel,
            key: 'hotel_id'
        }
    }
}, {
    tableName: 'employees',
    timestamps: false
});

// Quan hệ với Hotel
Employee.belongsTo(Hotel, { foreignKey: 'hotel_id' });

module.exports = Employee;
