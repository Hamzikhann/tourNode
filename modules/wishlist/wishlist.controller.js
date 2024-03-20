const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");
const { Op } = require("sequelize");

const Whishlist = db.whishlist;
const Trip = db.trip;

exports.create = (req, res) => {
	try {
		const joiSchema = Joi.object({
			tripId: Joi.string().required()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const tripId = req.body.tripId;
			const userId = req.userId;

			Whishlist.findOne({ where: { userId: userId, tripId: tripId, isActive: "Y" } })
				.then((response) => {
					if (response) {
						res.send({ message: "This Trip is already into your WhishList" });
					} else {
						Whishlist.create({ tripId: tripId, userId: userId })
							.then((response) => {
								res.send({ message: "Trip added to the WhishList", data: response });
							})
							.catch((err) => {
								emails.errorEmail(req, err);
								res.status(500).send({
									message: err.message || "Some error occurred "
								});
							});
					}
				})
				.catch((err) => {
					emails.errorEmail(req, err);
					res.status(500).send({
						message: err.message || "Some error occurred "
					});
				});
		}
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred "
		});
	}
};

exports.list = (req, res) => {
	try {
		Trip.findAll({
			where: { isActive: "Y" },
			include: [
				{
					model: Whishlist,
					where: { userId: req.userId, isActive: "Y" }
				}
			]
		}).then((response) => {
			res.send({ message: "WishList ", data: response });
		});
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred "
		});
	}
};
