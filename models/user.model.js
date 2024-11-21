// models/user.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Đảm bảo đường dẫn đúng

const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: true,
        validate: {
            is: /^[0-9]+$/, // Chỉ cho phép ký tự số
        },
    },
}, {
    tableName: 'user', // Tên bảng trong cơ sở dữ liệu
    timestamps: false,  // Không tạo cột createdAt và updatedAt tự động
});

module.exports = User;
