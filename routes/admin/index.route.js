const systemConfig = require("../../config/system");

const dashboardRoutes = require("./dashboard.route");
<<<<<<< HEAD
const productRoutes = require("./product.route");
=======
const roomRoutes = require("./rooms.route");
>>>>>>> 1c6f5cc (admin/dashboard - rooms)

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
<<<<<<< HEAD
  app.use(PATH_ADMIN + "/products", productRoutes);
=======
  app.use(PATH_ADMIN + "/rooms", roomRoutes);
>>>>>>> 1c6f5cc (admin/dashboard - rooms)

}