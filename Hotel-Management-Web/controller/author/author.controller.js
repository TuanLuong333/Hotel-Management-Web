const sequelize = require("../../config/database");



module.exports.render = (req, res) => {
    res.render("author/pages/index", {
        pageTitle: "Login - Register Page"
    });
};
