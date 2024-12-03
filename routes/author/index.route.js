const systemConfig = require("../../config/system");

const authorRoutes = require("./author.route");

module.exports = (app) => {

  app.use("/author", authorRoutes);

}