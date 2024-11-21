// config/database.js
const { Sequelize } = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize('Hotel', 'root', '123456', {
=======
const sequelize = new Sequelize('hotelmanagement', 'root', '123456', {
>>>>>>> 1c6f5cc (admin/dashboard - rooms)
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
