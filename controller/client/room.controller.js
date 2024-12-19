const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const BookingModel = require("../../models/booking.model");
const AddressModel = require("../../models/address.model");
const ServiceModel = require("../../models/service.model");
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
            include: [
                {
                    model: AddressModel, // Liên kết với model Address
                    attributes: ['address_id', 'address_line1', 'city', 'country'], // Lấy các cột địa chỉ
                    required: true, 
                }
            ], // Chỉ lấy cột 'address' từ bảng Hotel
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
        console.log("reserve1");
        const { room_id, guest_name, check_in_date, check_out_date, service_choice  } = req.body;

        
        console.log("reserve1.5");
        // Kiểm tra thông tin cần thiết
        if (!room_id || !guest_name || !check_in_date || !check_out_date || !service_choice) {
            return res.status(400).json({ success: false, message: 'Missing required information for reservation' });
        }

        console.log("reserve2");
        // Kiểm tra nếu phòng có sẵn cho khoảng thời gian yêu cầu (nếu có logic kiểm tra sẵn)
        const existingReservation = await BookingModel.findOne({
            where: {
                room_id,
                check_in_date: { [Op.lte]: check_out_date },
                check_out_date: { [Op.gte]: check_in_date }
            }
        });
        console.log("reserve3");

        if (existingReservation) {
            console.log('Room is already booked for the selected dates');
            return res.status(400).json({ success: false, message: 'Room is already booked for the selected dates' });
        }
        console.log("reserve4");
        // Tạo đơn đặt phòng mới
        const room = await RoomModel.findOne({ where: { room_id: room_id } });
        
        const checkInDate = new Date(check_in_date);
        const checkOutDate = new Date(check_out_date);
        
        // Tính số ngày ở
        const timeDifference = checkOutDate - checkInDate;
        const daysStay = timeDifference / (1000 * 3600 * 24); // Chuyển từ mili giây sang ngày
        
        if (daysStay <= 0) {
            return res.status(400).json({ success: false, message: 'Check-out date must be after check-in date' });
        }

        let service_cost = 0;

        if (service_choice == "yes") {
            service_cost = 5000;
        }
        
        const total_amount = daysStay * room.price + service_cost;
        const hotel_id = room.hotel_id;
        var serviceEntry;

        if (service_choice === "yes") {
        
            serviceEntry = await ServiceModel.create({
                hotel_id: room.hotel_id,
                service_name: "Additional Service",
                cost: service_cost,
                booking_id: null // Set booking_id to null initially, will be updated later if needed
            });
        }

        const reservation = await BookingModel.create({
            guest_name,
            hotel_id, // Thêm hotel_id
            room_id,
            check_in_date,
            check_out_date,
            total_amount,
            status: 'confirm' // Đảm bảo 'status' đúng
        });

        res.json({ success: true, reservation });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ success: false, message: 'Reservation failed' });
    }
};


