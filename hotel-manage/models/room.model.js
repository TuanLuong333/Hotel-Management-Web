// const { DataTypes } = require('sequelize');
// const sequelize = require("../config/database");  // Đảm bảo đường dẫn đúng tới file database.js

// const Room = sequelize.define('Room', {
//     location: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     datetime: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     guests: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     rooms: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     used: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//     }
// }, {
//     tableName: 'rooms',  // Đảm bảo tên bảng chính xác trong MySQL
//     timestamps: false    // Bỏ qua các cột createdAt và updatedAt mặc định
// });

// module.exports = Room;


// models/Room.js

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
    type: {
        type: DataTypes.ENUM('Standard', 'Deluxe', 'Suite'),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('available', 'booked', 'maintenance'),
        defaultValue: 'available'
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'Room',
    timestamps: false
});

// Thiết lập mối quan hệ 1:N giữa Hotel và Room
Hotel.hasMany(Room, { foreignKey: 'hotel_id' });
Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

module.exports = Room;
