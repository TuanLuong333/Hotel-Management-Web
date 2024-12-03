const express = require("express");
const router = express.Router();

const LoginController = require("../../controller/author/login.controller");
const RegisterController = require("../../controller/author/register.controller");
const AuthorController = require("../../controller/author/author.controller");
const LogOutController =  require("../../controller/author/logout.controller");

router.get("/", AuthorController.render);

  module.exports = router;