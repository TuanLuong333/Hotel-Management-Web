
const RoomModel = require("../../models/room.model");
const HotelModel = require("../../models/hotel.model");
const UserModel = require("../../models/user.model");
const { Op } = require("sequelize");

const paginationHelper = require("../../helpers/pagination");

module.exports.index = async (req, res) => {
    console.log("Entering index function in profile.controller");

    try {
        res.render("client/pages/profile/index", {
            pageTitle: "hồ sơ người dùng",
            currentUser: req.session.user
        });
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).send("Internal Server Error in profile");
    }
};

module.exports.edit = async (req, res) => {
    try {
        const { email, username, phone_number, fullName } = req.body;
        const user = await UserModel.findByPk(req.session.user.user_id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Update user fields
        user.username = username;
        user.email = email;
        user.phone_number = phone_number;
        user.fullName = fullName;

        await user.save(); // Save changes to the database

        res.status(200).json({ success: true, message: 'Profile updated successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

