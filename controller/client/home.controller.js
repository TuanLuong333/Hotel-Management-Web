<<<<<<< HEAD
const RoomModel = require("../../models/product.model");
const { Op } = require("sequelize");

module.exports.index = async (req, res) => {
    console.log("Entering index function in product.controller");

    let find = {};
    const location = req.query.location;
    const date = req.query.datetime;
    const guests = Number(req.query.guests);
    const rooms = Number(req.query.rooms);

    if (req.query.location) {
        find.location = { [Op.like]: `%${location}%` };
    }

    if (req.query.datetime) {
        find.datetime = new Date(date);
    }

    if (req.query.guests) {
        find.guests = guests;
    }
  
    if (req.query.rooms) {
        find.rooms = rooms;
    }

    console.log("Query object:", find);

    try {
        const Room = await RoomModel.findAll({ where: find });
        console.log("Finishing finding and print obj");

        res.render("client/pages/home/index", {
            pageTitle: "Trang chủ khách sạn",
            Room: Room,
            location: location,
            rooms: rooms,
            date: date,
            guests: guests
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error"); 
    }
};
=======
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


const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const { Op } = require("sequelize");

const paginationHelper = require("../../helpers/pagination");

module.exports.index = async (req, res) => {
    console.log("Entering index function in room.controller");

    let find = { status: 'available' }; 
    const address = req.query.address;
    const type = req.query.room_type;
    const capacity = req.query.capacity;
    
    console.log("dia chi: ", address);
    console.log("loai: ", type);
    console.log("so luong: ", capacity);

    const hotelCondition = {};
    if (address) {
        hotelCondition.address = { [Op.like]: `%${address}%` };
    }

    if (capacity) {
        find.capacity = { [Op.gte]: capacity }; 
    }
    

    if (type) {
        find.room_type = { [Op.like]: `%${type}%` };
    }

    //Pagination
    const countProduct = await RoomModel.count({ where: find });
    console.log(countProduct);


  let objectPagination = paginationHelper(
    {
      limitItems: 4,
      currentPage: 1
    },
    req.query,
    countProduct
  );



  //End Pagination


    try {
        // Tìm các phòng với điều kiện trong Room và Hotel
        const Room = await RoomModel.findAll({
            limit: objectPagination.limitItems,       // Giới hạn số bản ghi trả về
            offset: objectPagination.skip, 
            where: find,
            include: [
                {
                    model: HotelModel,
                    attributes: ['address'],
                    where: hotelCondition // Điều kiện tìm kiếm location trong Hotel
                }
            ]
        });

        res.render("client/pages/home/index", {
            pageTitle: "Trang chủ khách sạn",
            Room: Room,
            address: address,
            capacity: capacity,
            room_type: type,
            pagination: objectPagination
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error"); 
    }
};
>>>>>>> 1c6f5cc (admin/dashboard - rooms)