const express = require("express");
const router = express.Router();

const LoginController = require("../../controller/author/login.controller");
const RegisterController = require("../../controller/author/register.controller");
const AuthorController = require("../../controller/author/author.controller");

router.get("/login", LoginController.render);
router.post("/login", LoginController.index);

router.get("/register", RegisterController.render);
router.post("/register", RegisterController.index);

router.get("/", AuthorController.render);

  module.exports = router;