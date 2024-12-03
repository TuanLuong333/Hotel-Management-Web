// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hotelweb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

// Đảm bảo bạn xuất khẩu sequelize
module.exports = sequelize;

// Kết nối tới cơ sở dữ liệu
module.exports.connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công đến MySQL với Sequelize!');    
    } catch (error) {
        console.log(error);
    }
};
