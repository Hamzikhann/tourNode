"use strict";

const express = require("express");
const router = express.Router();
const jwt = require("../../utils/jwt");

const authcontroller = require("./authentication.controller");

router.post("/login", authcontroller.login);
router.post("/check/otp", authcontroller.checkOtp);
router.post("/resend/otp", authcontroller.resentOtp);
// router.post("/reset/password/:token", jwt.resetPasswordProtect, authcontroller.resetPassword);

module.exports = router;
