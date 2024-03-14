const jwt = require("jsonwebtoken");

exports.signToken = (data, expiresIn = process.env.JWT_EXPIRES_IN) => {
	return jwt.sign(data, process.env.JWT_SECRET, { expiresIn });
};

exports.protect = (req, res, next) => {
	const token = req.headers["access-token"];
	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				res.status(440).send({
					message: err.message || "Session has been expired."
				});
			} else {
				Object.assign(req, {
					userId: decoded.userId,
					roleId: decoded.roleId,
					role: decoded.role
				});
				next();
			}
		});
	} else {
		res.status(400).send({
			message: "No Access Token"
		});
	}
};

exports.resetPasswordProtect = (req, res, next) => {
	const token = req.params.token;

	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) {
				res.status(440).send({
					message: err.message || "Session has been expired."
				});
			} else {
				Object.assign(req, {
					userId: decoded.userId,
					profileId: decoded.profileId,
					clientId: decoded.clientId,
					roleId: decoded.roleId,
					email: decoded.email
				});
				next();
			}
		});
	} else {
		res.status(400).send({
			message: "No Access Token"
		});
	}
};
