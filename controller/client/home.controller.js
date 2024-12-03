// const RoomModel = require("../../models/room.model");
// const { Op } = require("sequelize");

// module.exports.index = async (req, res) => {
//     console.log("Entering index function in product.controller");

//     let find = {};
//     const location = req.query.location;
//     const date = req.query.datetime;
//     const guests = Number(req.query.guests);
//     const rooms = Number(req.query.rooms);

//     if (req.query.location) {
//         find.location = { [Op.like]: `%${location}%` };
//     }

//     if (req.query.datetime) {
//         find.datetime = {
//             [Op.lt]: new Date(req.query.datetime) // Sử dụng toán tử '<' trong Sequelize
//         };
//     }
        
//     if (req.query.guests) {
//         find.guests = guests;
//     }
  
//     if (req.query.rooms) {
//         find.rooms = rooms;
//     }

//     try {
//         const Room = await RoomModel.findAll({ where: find });

//         res.render("client/pages/home/index", {
//             pageTitle: "Trang chủ khách sạn",
//             Room: Room,
//             location: location,
//             rooms: rooms,
//             date: date,
//             guests: guests
//         });
//     } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).send("Internal Server Error"); 
//     }
// };


// const RoomModel = require("../../models/room.model");
// const HotelModel = require("../../models/hotel.model");
// const { Op } = require("sequelize");

// const paginationHelper = require("../../helpers/pagination");

// module.exports.index = async (req, res) => {
//     console.log("Entering index function in room.controller");

//     let find = { status: 'available' }; 
//     const address = req.query.address;
//     const type = req.query.room_type;
//     const capacity = req.query.capacity;
    
//     console.log("dia chi: ", address);
//     console.log("loai: ", type);
//     console.log("so luong: ", capacity);

//     const hotelCondition = {};
//     if (address) {
//         hotelCondition.location = { [Op.like]: `%${address}%` };
//     }

//     if (capacity) {
//         find.capacity = { [Op.gte]: capacity }; 
//     }
    

//     if (type) {
//         find.type = { [Op.like]: `%${type}%` };
//     }

//     //Pagination
//     const countProduct = await RoomModel.count({ where: find });
//     console.log(countProduct);


//   let objectPagination = paginationHelper(
//     {
//       limitItems: 4,
//       currentPage: 1
//     },
//     req.query,
//     countProduct
//   );
//   //End Pagination


//     try {
//         // Tìm các phòng với điều kiện trong Room và Hotel
//         const Room = await RoomModel.findAll({
//             limit: objectPagination.limitItems,       // Giới hạn số bản ghi trả về
//             offset: objectPagination.skip, 
//             where: find,
//             include: [
//                 {
//                     model: HotelModel,
//                     attributes: ['location'],
//                     where: hotelCondition // Điều kiện tìm kiếm location trong Hotel
//                 }
//             ]
//         });

//         res.render("client/pages/home/index", {
//             pageTitle: "Trang chủ khách sạn",
//             Room: Room,
//             address: address,
//             capacity: capacity,
//             room_type: type,
//             pagination: objectPagination,
//             user: req.session.user
//         });
//     } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).send("Internal Server Error in home"); 
//     }
// };
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

    // Điều kiện tìm kiếm cho khách sạn (Hotel)
    const hotelCondition = {};
    // if (address) {
    //     // Điều kiện tìm kiếm khách sạn có địa chỉ chứa `address`
    //     hotelCondition['$Hotel.location$'] = { [Op.like]: `%${address}%` }; // Sử dụng alias `Hotel.location`
    // }

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
            limitItems: 4,
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
