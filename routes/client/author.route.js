const express = require("express");
const router = express.Router();

const LoginController = require("../../controller/client/login.controller");
const RegisterController = require("../../controller/client/register.controller");

router.get("/login", LoginController.render);
router.post("/login", LoginController.index);

router.get("/register", RegisterController.render);
router.post("/register", RegisterController.index);

  module.exports = router;