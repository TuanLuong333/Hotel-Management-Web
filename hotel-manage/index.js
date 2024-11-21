const express = require("express");
require("dotenv").config();

const database = require("./config/database"); // Nhập sequelize từ tệp cấu hình

const systemConfig = require("./config/system");

const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

const app = express();
const port = process.env.PORT;

// Kết nối đến cơ sở dữ liệu trước khi khởi động ứng dụng
database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

// app local variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Routes
route(app);
// routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
