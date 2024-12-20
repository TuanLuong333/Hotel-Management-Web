const systemConfig = require("../../config/system");

const dashboardRoutes = require("./dashboard.route");
const roomRoutes = require("./rooms.route");
const hotelRoutes = require("./hotel.route");
const bookingRoutes = require("./booking.route");
const invoiceRoutes = require("./invoice.route");
const employeeRoutes = require("./employee.route");
const statisticRoutes = require("./statistic.route");




module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
  app.use(PATH_ADMIN + "/rooms", roomRoutes);
  app.use(PATH_ADMIN + "/hotels", hotelRoutes);
  app.use(PATH_ADMIN + "/bookings", bookingRoutes);
  app.use(PATH_ADMIN + "/invoices", invoiceRoutes);
  app.use(PATH_ADMIN + "/employees", employeeRoutes);
  app.use(PATH_ADMIN + "/statistics", statisticRoutes);


}