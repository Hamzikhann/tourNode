const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");
const { sequelize } = require("../../models");

const Users = db.users;
const Trip = db.trip;
const UserTrip = db.userTrip;
const UserStories = db.userStories;
const UserStoriesImages = db.userStoriesImages;
const TripImages = db.tripImages;

exports.userDashboard = async (req, res) => {
	try {
		let allOfferedTrips = await Trip.findAndCountAll({
			where: { isActive: "Y", tripType: "Offer" },
			include: [
				{
					model: TripImages
				}
			],
			attributes: { exclude: ["isActive", "createdAt", "updatedAt"] }
		});

		let allRegularTrips = await Trip.findAndCountAll({
			where: { isActive: "Y", tripType: "Group" },
			include: [
				{
					model: TripImages
				}
			],
			attributes: { exclude: ["isActive", "createdAt", "updatedAt"] }
		});

		let allClients = await Users.findAll({
			where: { isActive: "Y", roleId: 2 },
			include: [
				{
					model: Trip,
					required:false,
					where: { isActive: "Y" },
					attributes: ["id"]
				},
				{
					model: UserStories,
					required:false,

					attributes: ["id"],
					include: [
						{
							model: UserStoriesImages
						}
					]
				}
			],
			attributes: { exclude: ["isActive", "createdAt", "updatedAt", "roleId", "otp", "randomNo"] },
		
		});

		allClients.forEach((e) => {
			e.tripCount = e.trips.length;
			console.log(e.tripCount);
		});
console.log(allClients)
		res.send({ message: "A Dashboard Retrival", data: { allClients, allOfferedTrips, allRegularTrips } });
	} catch (err) {
		emails.errorEmail(req, err);
		res.status(500).send({
			message: err.message || "Some error occurred "
		});
	}
};
