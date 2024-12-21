// // config/database.js
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('hotelmanage', 'root', '123456', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// // Đảm bảo bạn xuất khẩu sequelize
// module.exports = sequelize;

// // Kết nối tới cơ sở dữ liệu
// module.exports.connect = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Kết nối thành công đến MySQL với Sequelize!');    
//     } catch (error) {
//         console.log(error);
//     }
// };
const { Sequelize } = require('sequelize');

// Sử dụng biến môi trường để cấu hình
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, // Tên cơ sở dữ liệu
    process.env.MYSQL_USER,     // Tên người dùng
    process.env.MYSQL_PASSWORD, // Mật khẩu
    {
        host: process.env.MYSQL_HOST, // Host của MySQL
        port: process.env.MYSQL_PORT,// Cổng mặc định của MySQL
        dialect: 'mysql',
    }
);

// Đảm bảo bạn xuất khẩu sequelize
module.exports = sequelize;

// Kết nối tới cơ sở dữ liệu
module.exports.connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối thành công đến MySQL với Sequelize!');
    } catch (error) {
        console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
    }
};
