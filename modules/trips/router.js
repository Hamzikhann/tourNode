"use strict";

const express = require("express");
const router = express.Router();
const jwt = require("../../utils/jwt");

const tripController = require("./trip.controller");

router.post("/detail", (req, res) => {
	if (req.role == "User") {
		tripController.detail(req, res);
	} else {
		res.status(403).send({ message: "Forbidden Access" });
	}
});

module.exports = router;
