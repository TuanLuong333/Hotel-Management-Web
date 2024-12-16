const sequelize = require("../../config/database");
const { Sequelize } = require("sequelize");

module.exports.index = async (req, res) => {
    const { username, password } = req.body;

    try {
        
        if (req.session.user == null) {
            return res.status(400).json({ msg: "session is null?" });
        }

        req.session.user = null;

        res.status(201).json({ msg: "logout successfully" });
        
    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

