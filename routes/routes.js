"use strict";
const jwt = require("../utils/jwt");

const authenticationRouteHandler = require("../modules/authentication/router");
const userRouteHandler = require("../modules/user/router");
const dashboardRouteHandler = require("../modules/dashboard/router");
const tripsRouteHandler = require("../modules/trips/router");

class Routes {
	constructor(app) {
		this.app = app;
	}
	appRoutes() {
		this.app.use("/api/auth", authenticationRouteHandler);
		this.app.use("/api/user", jwt.protect, userRouteHandler);
		this.app.use("/api/dashboard", jwt.protect, dashboardRouteHandler);
		this.app.use("/api/trip", jwt.protect, tripsRouteHandler);
	}
	routesConfig() {
		this.appRoutes();
	}
}
module.exports = Routes;
