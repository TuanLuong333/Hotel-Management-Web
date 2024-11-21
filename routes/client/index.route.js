<<<<<<< HEAD
const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");

module.exports = (app) => {
    app.use("/", homeRoutes);
      
    //app.use("/products", productRoutes);  
  }
=======
const roomRoutes = require("./room.route");
const homeRoutes = require("./home.route");
const authorRoutes = require("./author.route");

module.exports = (app) => {
    app.use("/", homeRoutes);
      
    app.use("/rooms", roomRoutes);  

    app.use("/author", authorRoutes);
}
>>>>>>> 1c6f5cc (admin/dashboard - rooms)
