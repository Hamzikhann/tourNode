"use strict";

const express = require("express");
const router = express.Router();
const jwt = require("../../utils/jwt");

const dashboardController = require("./dashboard.controller");

router.post("/", (req, res) => {
  console.log(req.role);
  if (req.role == "User") {
    dashboardController.userDashboard(req, res);
  } else {
    res.status(403).send({ message: "Forbidden Access" });
  }
});

module.exports = router;
