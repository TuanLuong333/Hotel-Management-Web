<<<<<<< HEAD
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
=======
const express = require("express");
require("dotenv").config();
var bodyParser = require('body-parser');
const session = require("express-session");

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
      secret: "secret", // Đặt khóa bí mật cho session
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, // Trong môi trường phát triển, đặt là false
  })
);


// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
>>>>>>> 1c6f5cc (admin/dashboard - rooms)
