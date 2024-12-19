const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");

const AddressModel = require("../../models/address.model");
const { Op } = require("sequelize");


const paginationHelper = require("../../helpers/pagination");
const searchHelper = require("../../helpers/searchBooking");

module.exports.index = async (req, res) => {
  const objectSearch = searchHelper(req.query);

  let find = {};

  if(objectSearch.keyword) {
      if (objectSearch.col == 0) {
          find.hotel_id = objectSearch.keyword;
      } else if (objectSearch.col == 1) {
          find.name = { [Op.like]: `%${objectSearch.keyword}%` }
      } else if (objectSearch.col == 2) {
          find.contact_number = { [Op.like]: `%${objectSearch.keyword}%` }
      } else if (objectSearch.col == 3) {
          find.email = { [Op.like]: `%${objectSearch.keyword}%` }
      } else if (objectSearch.col == 4) {
        find.address_id = objectSearch.keyword;
      } else if (objectSearch.col == 4) {
        find.descripion = { [Op.like]: `%${objectSearch.keyword}%` }
    }
  }

  const countHotel = await HotelModel.count({ where: find });

    let objectPagination = paginationHelper(
      {
          limitItems: 4,
          currentPage: 1
      },
      req.query,
      countHotel
  );

  const Hotel = await HotelModel.findAll({
    limit: objectPagination.limitItems,       // Giới hạn số bản ghi trả về
    offset: objectPagination.skip,
    where: find
  });
  
  res.render("admin/pages/hotel/index", {
    pageTitle: "Trang quan ly cac khach san",
    Hotel : Hotel,
    pagination: objectPagination,
  });
}



module.exports.delete = async (req, res) => {
  try {
    
    const hotel_id = req.query.hotelId;

    if (!hotel_id) {
      console.log('hotel id is null')
      return res.status(400).json({ message: 'hotel is null' });
    }

    const result = await HotelModel.destroy({
      where: { hotel_id: hotel_id }, 
    });

    if (!result) {
      console.log('hotel not found')
      return res.status(404).json({ message: 'hotel not found' });
    }

    return res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (error) {

    console.error('Error deleting hotel:', error);
    return res.status(500).json({ message: 'Failed to delete hotel' });
  }
}

module.exports.edit = async (req, res) => {
  const hotel_id = req.query.hotelId;

  let find = {hotel_id: hotel_id};

  const Hotel = await HotelModel.findAll({where: {
    hotel_id: hotel_id
  }});
  console.log(Hotel);

  res.render("admin/pages/hotel/edit", {
    pageTitle: "Trang chinh sua khach san",
    Hotel: Hotel,
  });
}

module.exports.update = async (req, res) => {
  const { name, contact_number, email_address, address_id, description, hotelId } = req.body;

  try {

    const Hotel = await HotelModel.findByPk(hotelId);
    if (!Hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    Hotel.name = name;
    Hotel.contact_number = contact_number;
    Hotel.email_address = email_address;
    Hotel.address_id = address_id;
    Hotel.descripion = description;

    await Hotel.save();

    res.status(200).json({ message: 'Booking updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating booking' });
  }
}

module.exports.add = async (req, res) => {
  res.render("admin/pages/hotel/add");
}

module.exports.create = async (req, res) => {
  const { name, contact_number, email_address, address_id, description } = req.body;

  const emailExists = await HotelModel.findOne({ where: { email_address } });
  if (emailExists) {
    return res.status(400).json({ success: false, message: `Email ${email_address} đã tồn tại trong hệ thống` });
  }

  const addressIdExists = await AddressModel.findOne({ where: { address_id } });
  if (!addressIdExists) {
    console.log("error in address_id");
    return res.status(400).json({ success: false, message: `adress_id ${address_id} chưa tồn tại trong hệ thống` });
  }


  try {
    const newHotel = new HotelModel({
      name,
      contact_number,
      email_address,
      address_id,
      description
    });

    await newHotel.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi thêm hotel' });
  }
}