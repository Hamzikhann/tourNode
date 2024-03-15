const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");
const otpGenerator = require("otp-generator");

const Users = db.users;
const Roles = db.roles;

const { Vonage } = require("@vonage/server-sdk");
const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

exports.login = async (req, res) => {
  try {
    let fullName = req.body.fullName;
    let phoneNo = req.body.phoneNo;
    let randomNo = req.body.randomNo;

    const userExist = await Users.findOne({
      where: {
        phoneNo: phoneNo,
        randomNo: randomNo,
        isActive: "Y",
      },
      include: [
        {
          model: Roles,
          attributes: ["title"],
        },
      ],
      attributes: ["id", "fullName", "roleId"],
    });

    if (userExist && userExist.role.title !== "Admin") {
      let otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      Users.update({ otp: otp }, { where: { id: userExist.id } })
        .then(async (response) => {
          const from = "Vonage APIs";
          const to = phoneNo;
          const text = `The Otp for your login is ${otp} enter this to confirm`;
          // const sendSms = await vonage.sms.send({ to, from, text });
          if (response) {
            encryptHelper(userExist);
            res.send({ message: "OTP send to the number", data: userExist });
          } else {
            res.send({ message: "OTP not send" });
          }
        })
        .catch((err) => {
          emails.errorEmail(req, err);
          res.status(500).send({
            message: err.message || "Some error occurred while reset password.",
          });
        });
    } else if (userExist.role.title == "Admin") {
      const token = jwt.signToken({
        userId: userExist.id,
        phoneNo: userExist.phoneNo,
        roleId: userExist.roleId,
        role: userExist.role.title,
      });
      res.status(200).send({
        messgae: "Logged in successful",
        data: { userExist },
        token,
      });
    } else {
      res.status(403).send({ message: "Incorrect Logins" });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

exports.checkOtp = (req, res) => {
  try {
    const joiSchema = Joi.object({
      otp: Joi.string().required(),
      userId: Joi.string().required(),
    });
    const { error, value } = joiSchema.validate(req.body);
    if (error) {
      const message = error.details[0].message.replace(/"/g, "");
      res.status(400).send({
        message: message,
      });
    } else {
      let otp = req.body.otp;
      let userId = req.body.userId;

      Users.findOne({
        where: { id: userId, otp: otp },
        include: [{ model: Roles }],
      }).then(async (response) => {
        if (response) {
          const token = jwt.signToken({
            userId: response.id,
            phoneNo: response.phoneNo,
            roleId: response.roleId,
            role: response.role.title,
          });
          let changeOtp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false,
          });

          let updateOtp = await Users.update(
            { otp: changeOtp },
            { where: { id: userId } }
          );
          res.status(200).send({
            messgae: "Logged in successful",
            data: { response },
            token,
          });
        } else {
          res.status(500).send({
            messgae: "Otp is incorrect Retry again",
          });
        }
      });
    }
  } catch (err) {
    emails.errorEmail(req, err);
    res.status(500).send({
      message: err.message || "Some error occurred while reset password.",
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    var email = req.body.email.trim();
    const user = await Users.findOne({
      where: {
        email: email,
        isActive: "Y",
      },
    });
    if (user) {
      // emails.forgotPassword(user);
      res.status(200).send({ message: "Email send to user." });
    } else {
      res.status(401).send({
        title: "Incorrect Email.",
        message:
          "Email does not exist in our system, Please verify you have entered correct email.",
      });
    }
  } catch (err) {
    emails.errorEmail(req, err);
    res.status(500).send({
      message: err.message || "Some error occurred while reset password.",
    });
  }
};
exports.resetPassword = async (req, res) => {
  try {
    const joiSchema = Joi.object({
      password: Joi.string().min(8).max(16).required(),
      confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
    });
    const { error, value } = joiSchema.validate(req.body);
    if (error) {
      const message = error.details[0].message.replace(/"/g, "");
      res.status(400).send({
        message: message,
      });
    } else {
      var email = req.email;
      const user = await Users.findOne({
        where: {
          email: email,
          isActive: "Y",
        },
      });

      if (user) {
        var password = req.body.password;

        Users.update(
          { password: crypto.encrypt(password) },
          { where: { id: user.id } }
        )
          .then((result) => {
            res.send({
              message: "User password reset successfully.",
            });
          })
          .catch((err) => {
            emails.errorEmail(req, err);
            res.status(500).send({
              message: "Error while reset User password",
            });
          });
      } else {
        res.status(401).send({
          title: "Incorrect Email.",
          message:
            "Email does not exist in our system, Please verify you have entered correct email.",
        });
      }
    }
  } catch (err) {
    emails.errorEmail(req, err);
    res.status(500).send({
      message: err.message || "Some error occurred while reset password.",
    });
  }
};

exports.resentOtp = (req, res) => {
  try {
    const joiSchema = Joi.object({
      userId: Joi.string().required(),
    });
    const { error, value } = joiSchema.validate(req.body);
    if (error) {
      const message = error.details[0].message.replace(/"/g, "");
      res.status(400).send({
        message: message,
      });
    } else {
      const userId = req.body.userId;

      Users.findOne({ where: { id: userId } })
        .then((response) => {
          if (response) {
            let otp = otpGenerator.generate(4, {
              upperCaseAlphabets: false,
              specialChars: false,
              lowerCaseAlphabets: false,
            });
            Users.update({ otp: otp }, { where: { id: response.id } })
              .then(async (response) => {
                const from = "Vonage APIs";
                const to = phoneNo;
                const text = `The Otp for your login is ${otp} enter this to confirm`;
                // const sendSms = await vonage.sms.send({ to, from, text });
                if (response) {
                  encryptHelper(userExist);
                  res.send({
                    message: "OTP send to the number again",
                    data: userExist,
                  });
                } else {
                  res.send({ message: "OTP not send" });
                }
              })
              .catch((err) => {
                emails.errorEmail(req, err);
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while reset password.",
                });
              });
          } else {
            res.send({ message: "User does not exist" });
          }
        })
        .catch((err) => {
          emails.errorEmail(req, err);
          res.status(500).send({
            message: err.message || "Some error occurred while reset password.",
          });
        });
    }
  } catch (err) {
    emails.errorEmail(req, err);
    res.status(500).send({
      message: err.message || "Some error occurred while reset password.",
    });
  }
};
