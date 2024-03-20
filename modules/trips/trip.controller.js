const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");
const { Op } = require("sequelize");

const Trip = db.trip;
const Users = db.users;
const TripCategories = db.tripCategories;
const TripSubCategories = db.tripSubCategories;
const TripImages = db.tripImages;

exports.detail = (req, res) => {
	try {
		const joiSchema = Joi.object({
			tripId: Joi.string().required(),
			tripType: Joi.string().optional()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const tripId = req.body.tripId;
			const tripType = req.body.tripType ? req.body.tripType : null;
			let tripWhere = { id: tripId, isActive: "Y" };

			if (tripType) {
				tripWhere.tripType = tripType;
			}
			console.log(tripWhere);
			Trip.findOne({
				where: tripWhere,
				include: [
					{
						model: TripCategories,
						required: false,
						where: { isActive: "Y" }
						// include: [
						// 	{
						// 		model: TripSubCategories,
						// 		required: false,

						// 		where: { isActive: "Y" }
						// 	}
						// ]
					},
					{
						model: TripImages,
						required: false
					},
					{
						model: Users,
						required: false
					}
				]
			})
				.then((response) => {
					if (response) {
						res.send({ message: "Trip detail", data: response });
					} else {
						res.send({ mesage: "Trip Id is invalid or no trip exist" });
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

exports.search = (req, res) => {
	try {
		const joiSchema = Joi.object({
			tripName: Joi.string().required(),
			startDate: Joi.string().optional(),
			endDate: Joi.string().optional()
		});
		const { error, value } = joiSchema.validate(req.body);
		if (error) {
			const message = error.details[0].message.replace(/"/g, "");
			res.status(400).send({
				message: message
			});
		} else {
			const tripName = req.body.tripName;
			const startDate = req.body.startDate ? req.body.startDate : null;
			const endDate = req.body.endDate ? req.body.endDate : null;
			let whereClause = {
				tripName: {
					[Op.like]: `%${tripName}%`
				}
			};
			if (startDate) {
				whereClause.startDate = startDate;
			}
			if (endDate) {
				whereClause.endDate = endDate;
			}
			console.log(whereClause);
			Trip.findAll({
				where: whereClause
			})
				.then((response) => {
					if (response) {
						res.send({ message: "Searched Data", data: response });
					} else {
						res.send({ message: "Not Found" });
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
