const roomRoutes = require("./room.route");
const homeRoutes = require("./home.route");
const authorRoutes = require("./author.route");

module.exports = (app) => {
    app.use("/", homeRoutes);
      
    app.use("/rooms", roomRoutes);  

    app.use("/author", authorRoutes);
}