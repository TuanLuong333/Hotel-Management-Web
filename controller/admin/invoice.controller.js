const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const { Op } = require("sequelize");


const paginationHelper = require("../../helpers/pagination");

module.exports.index = async (req, res) => {
  let find = {
  };

  const Room = await RoomModel.findAll({where: find});
  res.render("admin/pages/payment/index", {
    pageTitle: "Trang quan ly hoa don",
    // Room: Room
  });
}