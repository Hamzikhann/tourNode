"use strict";

const express = require("express");
const router = express.Router();
const jwt = require("../../utils/jwt");

const userController = require("./user.controller");

router.post("/create", (req, res) => {
	if (req.role == "Admin") {
		userController.create(req, res);
	} else {
		res.status(403).send({ message: "Forbidden Access" });
	}
});

router.post("/detail", (req, res) => {
	if (req.role == "Client") {
		userController.detail(req, res);
	} else {
		res.status(403).send({ message: "Forbidden Access" });
	}
});
module.exports = router;
