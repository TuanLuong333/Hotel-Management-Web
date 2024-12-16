const express = require("express");
const router = express.Router();

const controller = require("../../controller/admin/hotel.controller")

router.get("/", controller.index );

router.delete("/delete", controller.delete);

router.get("/edit", controller.edit);

router.post("/update", controller.update);

router.get("/add", controller.add);

router.post("/create", controller.create);

  module.exports = router;