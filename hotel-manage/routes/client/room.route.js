const express = require("express");
const router = express.Router();

const controller = require("../../controller/client/room.controller");

router.get("/", controller.index); 


module.exports = router;