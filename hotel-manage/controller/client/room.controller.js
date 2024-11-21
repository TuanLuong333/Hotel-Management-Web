const RoomModel = require("../../models/room.model");

module.exports.index = async (req, res) => {

    console.log("starting inspect obj");

    let find = {};
    const room_id = req.query.room_id;

    if(room_id) {
        find.room_id = room_id;
    }

    const Room = await RoomModel.findAll({ where: find });
    res.render("client/pages/rooms/index", {
        pageTitle: "ds phòng",
        Room: Room
    });
}



