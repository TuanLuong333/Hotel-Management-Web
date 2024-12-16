const express = require("express");
const router = express.Router();

const controller = require("../../controller/client/profile.controller");

router.get("/", controller.index);

router.post("/edit", controller.edit);

  module.exports = router;