const express = require("express");
const router = express.Router();

const controller = require("../../controller/admin/statistic.controller")

router.get("/", controller.index );
router.get("/query1", controller.query1 );
router.get("/query2", controller.query2 );
router.get("/query3", controller.query3 );
router.get("/query4", controller.query4 );
router.get("/query5", controller.query5 );

  module.exports = router;