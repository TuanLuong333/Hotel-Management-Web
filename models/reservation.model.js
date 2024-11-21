const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer.model');
const Room = require('./room.model');

const Reservation = sequelize.define('Reservation', {
  reservation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer,
      key: 'customer_id'
    }
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Room,
      key: 'room_id'
    }
  },
  check_in_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  check_out_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('confirmed', 'canceled', 'completed'),
    defaultValue: 'confirmed'
  },
  created_at: {
    type: DataTypes.DATE, // Đảm bảo sử dụng DataTypes.DATE
    defaultValue: DataTypes.NOW // Thiết lập mặc định là thời điểm hiện tại
  }
}, {
  tableName: 'reservations',
  timestamps: false
});

// Thiết lập mối quan hệ
Customer.hasMany(Reservation, { foreignKey: 'customer_id' });
Reservation.belongsTo(Customer, { foreignKey: 'customer_id' });

Room.hasMany(Reservation, { foreignKey: 'room_id' });
Reservation.belongsTo(Room, { foreignKey: 'room_id' });

module.exports = Reservation;
