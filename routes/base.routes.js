const express = require("express");

const router = express.Router();

const baseController = require("../controllers/base.controller");

router.get("/", baseController.getHomeRoute);

module.exports = router;
