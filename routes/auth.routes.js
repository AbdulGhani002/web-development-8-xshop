const express = require("express");

const router = express.Router();

const baseController = require("../controllers/base.controller");

const authController = require("../controllers/auth.controller");



router.get("/signup", authController.getSignupRoute);

router.get("/login", authController.getLoginRoute);

module.exports = router;
