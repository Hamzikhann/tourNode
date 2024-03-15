"use strict";
const jwt = require("../utils/jwt");

const authenticationRouteHandler = require("../modules/authentication/router");
const userRouteHandler = require("../modules/user/router");
const dashboardRouteHandler = require("../modules/dashboard/router");

class Routes {
	constructor(app) {
		this.app = app;
	}
	appRoutes() {
		this.app.use("/api/auth", authenticationRouteHandler);
		this.app.use("/api/user", jwt.protect, userRouteHandler);
		this.app.use("/api/dashboard", jwt.protect, dashboardRouteHandler);
	}
	routesConfig() {
		this.appRoutes();
	}
}
module.exports = Routes;
