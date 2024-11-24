const express = require("express");
const router = express.Router();

const controller = require("../../controller/client/room.controller");

router.get("/", controller.index); 
router.post("/reserve", controller.reservation); 


module.exports = router;