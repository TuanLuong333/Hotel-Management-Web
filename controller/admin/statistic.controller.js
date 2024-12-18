const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const { Op } = require("sequelize");
const sequelize = require('../../config/database'); 




module.exports.index = async (req, res) => {
  let find = {
  };

  const Room = await RoomModel.findAll({where: find});
  res.render("admin/pages/statistic/index", {
    pageTitle: "Statistics of database ",
  });
}

module.exports.query1 = async (req, res) => {
  try {
    const roomType = req.query.roomType;  // Lấy giá trị roomType từ query string (ví dụ: ?roomType=Single)
    
    if (!roomType) {
        return res.status(400).json({ message: 'Vui lòng chọn loại phòng!' });
    }

    // Xây dựng truy vấn với điều kiện room_type
    const query = `
        SELECT r.room_type, 
               SUM(b.total_amount) AS total_revenue
        FROM rooms r
        JOIN bookings b ON r.room_id = b.room_id
        WHERE r.room_type = :roomType
        GROUP BY r.room_type
        ORDER BY total_revenue DESC;
    `;
    
    // Thực hiện truy vấn SQL với điều kiện roomType
    const result = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
        replacements: { roomType },  // Truyền giá trị roomType vào query
    });

    // Kiểm tra nếu không có dữ liệu
    if (result.length === 0) {
        return res.status(404).json({ message: 'Không có dữ liệu cho loại phòng này!' });
    }

    // Gửi kết quả về client
    res.json(result);
} catch (error) {
    console.error('Lỗi truy vấn:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra trong quá trình truy vấn cơ sở dữ liệu' });
}
}

module.exports.query2 = async (req, res) => {
  try {
    const roomType = req.query.roomType;  // Lấy giá trị loại phòng từ query string

    if (!roomType) {
        return res.status(400).json({ message: 'Vui lòng chọn loại phòng!' });
    }

    // Câu truy vấn SQL
    const query = `
        SELECT MONTH(b.check_in_date) AS peak_month, 
               COUNT(*) AS bookings_count
        FROM bookings b
        JOIN rooms r ON b.room_id = r.room_id
        WHERE r.room_type = :roomType
        GROUP BY peak_month
        ORDER BY bookings_count DESC
        LIMIT 1;
    `;

    // Thực hiện truy vấn SQL với giá trị roomType
    const result = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
        replacements: { roomType },  // Truyền roomType vào query
    });

    // Trả kết quả về client dưới dạng JSON
    res.json(result);
} catch (error) {
    console.error('Lỗi truy vấn:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra trong quá trình truy vấn cơ sở dữ liệu' });
}
}

module.exports.query3 = async (req, res) => {
  try {
    const hotelId = req.query.hotel_id;  // Lấy giá trị hotel_id từ query string

    if (!hotelId) {
        return res.status(400).json({ message: 'Vui lòng nhập ID khách sạn!' });
    }

    // Câu truy vấn SQL
    const query = `
        SELECT h.name AS hotel_name, 
               COUNT(b.booking_id) AS total_bookings, 
               SUM(b.total_amount) AS total_revenue
        FROM bookings b
        JOIN hotels h ON b.hotel_id = h.hotel_id
        WHERE h.hotel_id = :hotel_id
        GROUP BY h.name;
    `;

    // Thực hiện truy vấn SQL với giá trị hotel_id
    const result = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
        replacements: { hotel_id: hotelId },  // Truyền hotel_id vào query
    });

    // Trả kết quả về client dưới dạng JSON
    res.json(result);
} catch (error) {
    console.error('Lỗi truy vấn:', error);
    res.status(500).json({ message: 'Có lỗi xảy ra trong quá trình truy vấn cơ sở dữ liệu' });
}
}

module.exports.query4 = async (req, res) => {
  try {
    const hotelId = req.query.hotel_id;  // Lấy ID khách sạn từ query string

    // Câu truy vấn SQL
    const query = `
      SELECT MONTH(payment_date) AS month, 
             YEAR(payment_date) AS year, 
             SUM(payment_amount) AS monthly_revenue
      FROM payment
      WHERE status = 'Completed'
      GROUP BY YEAR(payment_date), MONTH(payment_date)
      ORDER BY year, month;
    `;

    // Thực thi câu truy vấn SQL
    const [results, metadata] = await sequelize.query(query);

    if (results && results.length > 0) {
      // Trả về kết quả cho frontend
      return res.json(results);  // Trả về dưới dạng JSON cho client
    } else {
      // Trả về kết quả rỗng
      return res.json([]);  // Nếu không có dữ liệu, trả về mảng rỗng
    }
  } catch (error) {
    console.error('Error querying data:', error);
    res.status(500).send('Lỗi khi truy vấn dữ liệu');
  }
}


module.exports.query5 = async (req, res) => {
  const { hotel_id } = req.query; // Lấy hotel_id từ query string

  if (!hotel_id) {
    return res.status(400).send('hotel_id is required');
  }

  console.log("f1");
  try {
    const query = `
      SELECT h.name AS hotel_name, 
             COUNT(CASE WHEN r.status = 'Available' THEN 1 END) AS available_rooms,
             COUNT(*) AS total_rooms,
             ROUND((COUNT(CASE WHEN r.status = 'Available' THEN 1 END) / COUNT(*)) * 100, 2) AS vacancy_rate
      FROM rooms r
      JOIN hotels h ON r.hotel_id = h.hotel_id
      WHERE h.hotel_id = :hotel_id
      GROUP BY h.name;
    `;

    // Thực thi câu truy vấn SQL
    const [results] = await sequelize.query(query, {
      replacements: { hotel_id: hotel_id }, // Thay thế hotel_id trong câu truy vấn
    });

    if (results && results.length > 0) {
      return res.json(results); // Trả dữ liệu dưới dạng JSON cho frontend
    } else {
      return res.json([]); // Trả về mảng rỗng nếu không có dữ liệu
    }
  } catch (error) {
    console.error('Error querying data:', error);
    return res.status(500).send('Lỗi khi truy vấn dữ liệu');
  }
};
