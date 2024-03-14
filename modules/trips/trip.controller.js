const db = require("../../models");
const jwt = require("../../utils/jwt");
const encryptHelper = require("../../utils/encryptHelper");
const emails = require("../../utils/emails");
const Joi = require("@hapi/joi");

const Trip = db.trip;
const TripCategories = db.tripCategories;
const TripSubCategories = db.TripSubCategories;

// exports.
