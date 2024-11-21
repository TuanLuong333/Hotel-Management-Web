const sequelize = require("../../config/database");
const { Sequelize } = require("sequelize");

module.exports.index = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [user] = await sequelize.query(
            "SELECT user_id, username, email, password, role FROM user WHERE username = :username",
            {
                replacements: { username },
                type: Sequelize.QueryTypes.SELECT
            }
        );

        if (!user || user.password !== password) {
            return res.status(400).json({ msg: "Invalid username or password" });
        }

        req.session.user = {
            id: user.user_id,
            username: user.username,
            role: user.role,
        };

        console.log("User session is set success:", req.session.user);
        
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ msg: "Server error" });
    }
};


module.exports.render = (req, res) => {
    res.render("client/pages/author/login/index", {
        pageTitle: "Login Page",
        User: req.session.user
    });
};
