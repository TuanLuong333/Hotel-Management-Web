const systemConfig = require("../../config/system");

const dashboardRoutes = require("./dashboard.route");
const roomRoutes = require("./rooms.route");
const customerRoutes = require("./customer.route");
const bookingRoutes = require("./booking.route");
const invoiceRoutes = require("./invoice.route");



module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
  app.use(PATH_ADMIN + "/rooms", roomRoutes);
  app.use(PATH_ADMIN + "/customers", customerRoutes);
  app.use(PATH_ADMIN + "/bookings", bookingRoutes);
  app.use(PATH_ADMIN + "/invoices", invoiceRoutes);

}