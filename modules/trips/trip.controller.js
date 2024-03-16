const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");

const Trip = db.trip;
const Users = db.users;
const TripCategories = db.tripCategories;
const TripSubCategories = db.tripSubCategories;
const TripImages = db.tripImages;

exports.detail = (req, res) => {
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

			Trip.findOne({
				where: { id: tripId, isActive: "Y" },
				include: [
					{
						model: TripCategories,
						where: { isActive: "Y" },
						include: [
							{
								model: TripSubCategories,
								where: { isActive: "Y" }
							}
						]
					},
					{
						model: TripImages
					},
					{
						model: Users
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
