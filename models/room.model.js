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
        allowNull: false,
        references: {
            model: Hotel,
            key: 'hotel_id'
        }
    },
    room_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    room_type: {
        type: DataTypes.ENUM('Single', 'Double', 'Suite'),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('available', 'occupied', 'maintenance'),
        defaultValue: 'available'
    },
    thumbnail: {  // Thêm trường thumbnail vào model
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'room',
    timestamps: false
});

// Thiết lập mối quan hệ 1:N giữa Hotel và Room
Hotel.hasMany(Room, { foreignKey: 'hotel_id' });
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

module.exports = Room;

