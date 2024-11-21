const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");  // Đảm bảo đường dẫn đúng tới file database.js

const Room = sequelize.define('Room', {
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datetime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    guests: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    used: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'rooms',  // Đảm bảo tên bảng chính xác trong MySQL
    timestamps: false    // Bỏ qua các cột createdAt và updatedAt mặc định
});

module.exports = Room;
