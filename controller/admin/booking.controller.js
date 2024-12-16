const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const BookingModel = require("../../models/booking.model");
const { Op } = require("sequelize");


const paginationHelper = require("../../helpers/pagination");
const filterBookingHelper = require("../../helpers/filterBooking");
const searchHelper = require("../../helpers/searchBooking");

module.exports.index = async (req, res) => {

  const filterBooking = filterBookingHelper(req.query);
  const objectSearch = searchHelper(req.query);

  let find = {};

  if(req.query.status) {
    find.status = req.query.status;
  }

  if(objectSearch.keyword) {

      if (objectSearch.col == 2) {
          find.hotel_id = objectSearch.keyword;
      } else if (objectSearch.col == 1) {
          find.room_id = objectSearch.keyword;
      } else if (objectSearch.col == 0) {
          find.guest_name = { [Op.like]: `%${objectSearch.keyword}%` }
      } else if (objectSearch.col == 5) {
          find.total_amount = { [Op.gte]: objectSearch.keyword };
      } else if (objectSearch.col == 3) {

        const checkInDate = new Date(objectSearch.keyword);
        if (!isNaN(checkInDate)) {
            find.check_in_date = { [Op.eq]: checkInDate };
        } else {
            console.log('Ngày check-in không hợp lệ');
        }
      } else if (objectSearch.col == 4) {
        const checkOutDate = new Date(objectSearch.keyword);
        if (!isNaN(checkOutDate)) {
            find.check_out_date = { [Op.eq]: checkOutDate };
        } else {
            console.log('Ngày check-out không hợp lệ');
        }
    }
  }

  
  const countBooking = await BookingModel.count({ where: find });

  let objectPagination = paginationHelper(
    {
        limitItems: 4,
        currentPage: 1
    },
    req.query,
    countBooking
);

 

  const Booking = await BookingModel.findAll({
    limit: objectPagination.limitItems,       // Giới hạn số bản ghi trả về
    offset: objectPagination.skip,
    where: find
  });
  res.render("admin/pages/booking/index", {
    pageTitle: "Trang quan ly dat phong",
    Booking: Booking,
    filterBooking: filterBooking,
    pagination: objectPagination,
  });
}

module.exports.delete = async (req, res) => {
  try {
    
    const booking_id = req.query.bookingId;

    if (!booking_id) {
      console.log('Book id is null')
      return res.status(400).json({ message: 'Booking ID is null' });
    }

    const result = await BookingModel.destroy({
      where: { booking_id: booking_id }, 
    });

    if (!result) {
      console.log('Booking not found')
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {

    console.error('Error deleting booking:', error);
    return res.status(500).json({ message: 'Failed to delete booking' });
  }
}

module.exports.edit = async (req, res) => {

  const booking_id = req.query.BookingId;

  let find = {booking_id: booking_id};

  const Booking = await BookingModel.findAll({booking_id: booking_id});

  res.render("admin/pages/booking/edit", {
    pageTitle: "Trang chinh sua dat phong",
    Booking: Booking,
  });
}

module.exports.update = async (req, res) => {

  const { guest_name, hotel_id, room_id, check_in_date, check_out_date, total_amount, status, bookingId } = req.body;

  try {

    const booking = await BookingModel.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    booking.guest_name = guest_name;
    booking.hotel_id = hotel_id;
    booking.room_id = room_id;
    booking.check_in_date = check_in_date;
    booking.check_out_date = check_out_date;
    booking.total_amount = total_amount;
    booking.status = status;

    await booking.save();

    res.status(200).json({ message: 'Booking updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating booking' });
  }
}

module.exports.add = async (req, res) => {
  res.render("admin/pages/booking/add", {});
}

module.exports.create = async (req, res) => {
  const { guest_name, room_id, hotel_id, check_in_date, check_out_date, total_amount, status } = req.body;

  const hotelExists = await HotelModel.findOne({ where: { hotel_id } });
    if (!hotelExists) {
      return res.status(400).json({ success: false, message: `Khách sạn với ID ${hotel_id} không tồn tại trong database` });
    }

    const roomExists = await RoomModel.findOne({ where: { room_id } });
    if (!roomExists) {
      return res.status(400).json({ success: false, message: `Phòng với ID ${room_id} không tồn tại` });
    }

    const roomBooked = await BookingModel.findOne({
      where: {
        room_id,
        [Op.or]: [
          {
            check_in_date: { [Op.between]: [check_in_date, check_out_date] }, 
          },
          {
            check_out_date: { [Op.between]: [check_in_date, check_out_date] }, 
          },
          {
            [Op.and]: [
              { check_in_date: { [Op.lte]: check_in_date } },
              { check_out_date: { [Op.gte]: check_out_date } },
            ],
          },
        ],
      },
    });

    if (roomBooked) {
      return res.status(400).json({ success: false, message: `Phòng với ID ${room_id} đã được đặt trong khoảng thời gian này` });
    }

  try {
    const newBooking = new BookingModel({
      guest_name,
      room_id,
      hotel_id,
      check_in_date,
      check_out_date,
      total_amount,
      status
    });

    await newBooking.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi thêm booking' });
  }
}
