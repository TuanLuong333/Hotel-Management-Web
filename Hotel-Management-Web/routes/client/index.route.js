const roomRoutes = require("./room.route");
const homeRoutes = require("./home.route");

module.exports = (app) => {
    app.use("/", homeRoutes);
      
    app.use("/rooms", roomRoutes);  
}