const sequelize = require("../../config/database");



module.exports.render = (req, res) => {
    res.render("author/pages/index", {
        pageTitle: "Two Routes Page for admin or customer "
    });
};
