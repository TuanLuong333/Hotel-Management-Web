const express = require("express");
const session = require("express-session");
require("dotenv").config();

const systemConfig = require("./config/system");
const database = require("./config/database");

const clientRoutes = require("./routes/client/index.route");
const adminRoutes = require("./routes/admin/index.route");
const authorRoutes = require("./routes/author/index.route");

const app = express();
const port = process.env.PORT || 3000;

// Kết nối cơ sở dữ liệu
database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

// Cấu hình session
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Import routes
clientRoutes(app);
adminRoutes(app);
authorRoutes(app);

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});