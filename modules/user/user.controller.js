const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");
const otpGenerator = require("otp-generator");

const Users = db.users;
const Roles = db.roles;
const Trip = db.trip;
const UserTrip = db.userTrip;
const TripCategories = db.tripCategories;
const TripSubCategories = db.tripSubCategories;
const UserStories = db.userStories;

exports.create = (req, res) => {
  try {
    const joiSchema = Joi.object({
      fullName: Joi.string().required(),
      phoneNo: Joi.string().required(),
      roleId: Joi.string().required(),
    });
    const { error, value } = joiSchema.validate(req.body);
    if (error) {
      const message = error.details[0].message.replace(/"/g, "");
      res.status(400).send({
        message: message,
      });
    } else {
      Users.findOne({ where: { phoneNo: req.body.phoneNo } })
        .then((response) => {
          if (response) {
            res.send({
              message: "The phone Number already exist use another one",
            });
          } else {
            let randomNo = otpGenerator.generate(6, {
              upperCaseAlphabets: false,
              specialChars: false,
            });
            Users.create({
              fullName: req.body.fullName,
              phoneNo: req.body.phoneNo,
              randomNo: randomNo,
              roleId: req.body.roleId,
            })
              .then((response) => {
                encryptHelper(response);
                res.send({
                  message: "User is created Successfully",
                  data: response,
                });
              })
              .catch((err) => {
                emails.errorEmail(req, err);
                res.status(500).send({
                  message: err.message || "Some error occurred",
                });
              });
          }
        })
        .catch((err) => {
          emails.errorEmail(req, err);
          res.status(500).send({
            message: err.message || "Some error occurred",
          });
        });
    }
  } catch (err) {
    emails.errorEmail(req, err);
    res.status(500).send({
      message: err.message || "Some error occurred ",
    });
  }
};

exports.detail = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    let trip = await Users.findOne({
      where: { id: userId },
      include: [
        {
          model: Trip,
          where: { isActive: "Y", userId: userId },
          include: [
            {
              model: TripCategories,
              required: false,
              where: { isActive: "Y" },
              include: [
                {
                  model: TripSubCategories,
                  required: false,

                  where: { isActive: "Y" },

                  attributes: ["id", "title"],
                },
              ],
              attributes: { exclude: ["isActive", "createdAt", "updatedAt"] },
            },
          ],
          attributes: ["id", "isActive"],
        },
        {
          model: UserStories,
          required: false,

          where: { isActive: "Y" },
          attributes: ["id"],
        },
      ],
      attributes: ["id", "fullName", "phoneNo", "sliderImage"],
    });

    res.send({ message: "User detail", data: trip });
  } catch (err) {
    console.log(err);
    emails.errorEmail(req, err);
    res.status(500).send({
      message: err.message || "Some error occurred ",
    });
  }
};
