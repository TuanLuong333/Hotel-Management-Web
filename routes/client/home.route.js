<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const controller = require("../../controller/client/home.controller")

router.get("/", controller.index );

=======
const express = require("express");
const router = express.Router();

const controller = require("../../controller/client/home.controller")

router.get("/", controller.index );

>>>>>>> 1c6f5cc (admin/dashboard - rooms)
  module.exports = router;