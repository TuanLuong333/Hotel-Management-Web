const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const { Op } = require("sequelize");



const paginationHelper = require("../../helpers/pagination");
const filterRoomHelper = require("../../helpers/filterRoom");
const searchHelper = require("../../helpers/searchBooking");

module.exports.index = async (req, res) => {
  const filterRoom = filterRoomHelper(req.query);
  const objectSearch = searchHelper(req.query);

  let find = {};

  if(req.query.status) {
    find.status = req.query.status;
  }

  if(objectSearch.keyword) {

      if (objectSearch.col == 2) {
          find.room_type = objectSearch.keyword;
      } else if (objectSearch.col == 1) {
          find.room_number = objectSearch.keyword;
      } else if (objectSearch.col == 0) {
          find.hotel_id = objectSearch.keyword;
      } else if (objectSearch.col == 3) {
          find.capacity = { [Op.gte]: objectSearch.keyword };
      } else if (objectSearch.col == 4) {
          find.thumbnail = { [Op.like]: `%${objectSearch.keyword}%` } 
      } 
  }

  
  const countRoom = await RoomModel.count({ where: find });

  let objectPagination = paginationHelper(
    {
        limitItems: 4,
        currentPage: 1
    },
    req.query,
    countRoom
);

 

  const Room = await RoomModel.findAll({
    limit: objectPagination.limitItems,       // Giới hạn số bản ghi trả về
    offset: objectPagination.skip,
    where: find
  });
  res.render("admin/pages/room/index", {
    pageTitle: "Trang quan ly phong",
    Room: Room,
    filterRoom: filterRoom,
    pagination: objectPagination,
  });
}

module.exports.delete = async (req, res) => {
  try {
    
    const room_id = req.query.roomId;

    if (!room_id) {
      console.log('Book id is null')
      return res.status(400).json({ message: 'Booking ID is null' });
    }

    const result = await RoomModel.destroy({
      where: { room_id: room_id }, 
    });

    if (!result) {
      console.log('Room not found')
      return res.status(404).json({ message: 'Room not found' });
    }

    return res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {

    console.error('Error deleting room:', error);
    return res.status(500).json({ message: 'Failed to delete room' });
  }
}

module.exports.edit = async (req, res) => {

  const room_id = req.query.roomId;

  let find = {room_id: room_id};

  const Room = await RoomModel.findAll({where: {
    room_id: room_id
  }});


  res.render("admin/pages/room/edit", {
    pageTitle: "Trang chinh sua phong",
    Room: Room,
  });
}

module.exports.update = async (req, res) => {

  const { hotel_id, room_number, room_type, capacity, thumbnail, status, roomId } = req.body;

  try {

    const Room = await RoomModel.findByPk(roomId);
    if (!Room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    Room.hotel_id = hotel_id;
    Room.room_type = room_type;
    Room.room_number = room_number;
    Room.capacity = capacity;
    Room.thumbnail = thumbnail;
    Room.status = status;

    await Room.save();

    res.status(200).json({ message: 'Booking updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating Room' });
  }
}


module.exports.add = async (req, res) => {
  res.render("admin/pages/room/add");
}

module.exports.create = async (req, res) => {
  const { hotel_id, room_type, room_number, capacity, thumbnail, status } = req.body;

  const hotelExists = await HotelModel.findOne({ where: { hotel_id } });
    if (!hotelExists) {
      return res.status(400).json({ success: false, message: `Khách sạn với ID ${hotel_id} không tồn tại trong database` });
    }

    const roomNumberExists = await RoomModel.findOne({ where: { room_number } });
    if (roomNumberExists) {
      return res.status(400).json({ success: false, message: `Phòng với ID ${room_id} đã tồn tại số phòng trong database` });
    }


  try {
    const newRoom = new RoomModel({
      hotel_id,
      room_type,
      room_number,
      capacity,
      thumbnail,
      status
    });

    await newRoom.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi thêm room' });
  }
}