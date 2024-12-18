const RoomModel = require("../../models/room.model");  // Model Room
const HotelModel = require("../../models/hotel.model");  // Model Hotel
const AddressModel = require("../../models/address.model");  // Model Address
const { Op } = require("sequelize");

const paginationHelper = require("../../helpers/pagination");

module.exports.index = async (req, res) => {
    console.log("Entering index function in room.controller");

    // Tạo đối tượng điều kiện tìm kiếm cho phòng (Room)
    let find = { };
    // status: 'Available' 
    const address = req.query.address;
    const type = req.query.room_type;
    const capacity = req.query.capacity;
    
    console.log("Dia chi: ", address);
    console.log("Loai phong: ", type);
    console.log("So luong: ", capacity);

    const hotelCondition = {};

    let addressCondition = {};
    if (address) {
        addressCondition = {[Op.or]: [
            { city: { [Op.like]: `%${address}%` } },
            { country: { [Op.like]: `%${address}%` } },
            { state: { [Op.like]: `%${address}%` } },
            { address_line1: { [Op.like]: `%${address}%` } }
        ]}
    }

    if (capacity) {
        find.capacity = { [Op.gte]: capacity }; // Tìm phòng có sức chứa >= `capacity`
    }

    if (type) {
        find.room_type = { [Op.like]: `%${type}%` }; // Tìm phòng có loại phòng phù hợp
    }

    // Pagination
    const countProduct = await RoomModel.count({ where: find });
    console.log("Total available rooms:", countProduct);

    let objectPagination = paginationHelper(
        {
            limitItems: 8,
            currentPage: 1
        },
        req.query,
        countProduct
    );
    // End Pagination

    try {
        // Tìm các phòng với điều kiện trong Room và Hotel
        const rooms = await RoomModel.findAll({
            limit: objectPagination.limitItems,       // Giới hạn số bản ghi trả về
            offset: objectPagination.skip, 
            where: find, // Điều kiện tìm kiếm cho phòng
            include: [
                {
                    model: HotelModel, // Liên kết với model Hotel
                    required: true, // Chỉ lấy phòng có khách sạn liên kết
                    include: [
                        {
                            model: AddressModel, // Liên kết với model Address
                            attributes: ['address_id', 'address_line1', 'city', 'country'], // Lấy các cột địa chỉ
                            required: true, // Chỉ lấy khách sạn có địa chỉ liên kết
                            where: addressCondition
                        }
                    ],
                    where: hotelCondition // Điều kiện tìm kiếm location trong Hotel
                }
            ]
        });

        // Render dữ liệu ra view
        res.render("client/pages/home/index", {
            pageTitle: "Trang chủ khách sạn",
            rooms: rooms,
            address: address,
            capacity: capacity,
            room_type: type,
            pagination: objectPagination,
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error in home"); 
    }
};
