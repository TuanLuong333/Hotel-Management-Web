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
        },
        onDelete: 'CASCADE',  // Xử lý khi hotel bị xóa
        onUpdate: 'CASCADE'   // Xử lý khi hotel bị cập nhật
    },
    room_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true  // Đảm bảo mỗi phòng có số phòng duy nhất
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
    }
}, {
    tableName: 'rooms',
    timestamps: false
});

// Quan hệ với Hotel
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

module.exports = Room;
