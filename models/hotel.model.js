// models/Hotel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Address = require('./address.model');  // Liên kết với Address

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
    contact_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email_address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT
    },
    address_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Address,
            key: 'address_id'
        }
    }
}, {
    tableName: 'hotels',
    timestamps: false
});

// Quan hệ với Address
Hotel.belongsTo(Address, { foreignKey: 'address_id' });

module.exports = Hotel;
