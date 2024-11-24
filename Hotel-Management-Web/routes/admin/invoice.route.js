const express = require("express");
const router = express.Router();

const controller = require("../../controller/admin/invoice.controller")

router.get("/", controller.index );

  module.exports = router;