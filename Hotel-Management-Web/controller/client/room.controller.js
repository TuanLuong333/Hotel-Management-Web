const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const CustomerModel = require("../../models/customer.model");
const BookingModel = require("../../models/booking.model");
const { Op } = require("sequelize");

module.exports.index = async (req, res) => {

    console.log("starting inspect obj");

    let find = {};
    const room_id = req.query.room_id;

    if(room_id) {
        find.room_id = room_id;
    }

    const Room = await RoomModel.findAll({ 
        where: find,
        include: [{
            model: HotelModel,
            attributes: ['location'] // Chỉ lấy cột 'address' từ bảng Hotel
        }]
     });

     let sort = {};
     

    res.render("client/pages/rooms/index", {
        pageTitle: "ds phòng",
        Room: Room
    });
}


module.exports.reservation = async (req, res) => {
    try {
        const { room_id, customer_name, customer_email, customer_phone, check_in_date, check_out_date } = req.body;

        // Kiểm tra thông tin cần thiết
        if (!room_id || !customer_name || !customer_email || !check_in_date || !check_out_date) {
            return res.status(400).json({ success: false, message: 'Missing required information for reservation' });
        }

        // Tạo khách hàng mới nếu chưa tồn tại
        const [customer, created] = await CustomerModel.findOrCreate({
            where: { email: customer_email },
            defaults: {
                name: customer_name,
                phone: customer_phone
            }
        });

        // Kiểm tra nếu phòng có sẵn cho khoảng thời gian yêu cầu (nếu có logic kiểm tra sẵn)
        const existingReservation = await BookingModel.findOne({
            where: {
                room_id,
                check_in_date: { [Op.lte]: check_out_date },
                check_out_date: { [Op.gte]: check_in_date }
            }
        });

        if (existingReservation) {
            console.log('Room is already booked for the selected dates');
            return res.status(400).json({ success: false, message: 'Room is already booked for the selected dates' });
        }

        // Tạo đơn đặt phòng mới
        const reservation = await BookingModel.create({
            customer_id: customer.customer_id,
            room_id,
            check_in_date,
            check_out_date,
            status: 'confirmed'
        });

        res.json({ success: true, reservation });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ success: false, message: 'Reservation failed' });
    }
};


