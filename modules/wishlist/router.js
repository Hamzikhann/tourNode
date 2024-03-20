const express = require("express");
const router = express.Router();
const wishlistController = require("./wishlist.controller");

router.post("/create", (req, res) => {
	if (req.role == "User") {
		wishlistController.create(req, res);
	} else {
		res.status(403).send({ message: "Forbidden Access" });
	}
});

router.post("/list", (req, res) => {
	if (req.role == "User") {
		wishlistController.list(req, res);
	} else {
		res.status(403).send({ message: "Forbidden Access" });
	}
});

module.exports = router;
