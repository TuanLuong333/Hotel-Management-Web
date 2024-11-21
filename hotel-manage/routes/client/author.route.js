const express = require("express");
const router = express.Router();

const LoginController = require("../../controller/client/login.controller");
const RegisterController = require("../../controller/client/register.controller");

router.get("/login", LoginController.index);
router.get("/register", RegisterController.index);

  module.exports = router;