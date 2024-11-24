const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'guest', 'manager'),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fullname: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = User;
