function encryptHelper(toEncrypt) {
	function objIDsEnc(obj) {
		Object.keys(obj).forEach(function (key) {
			if (Array.isArray(obj[key])) {
				obj[key].forEach(function (obj) {
					encryptHelper(obj);
				});
			} else if (
				typeof obj[key] === "object" &&
				obj[key] !== null &&
				!(key.endsWith("At") || key.endsWith("Date") || key.endsWith("date"))
			) {
				encryptHelper(obj[key]);
			} else {
				if (key.endsWith("id") || key.endsWith("Id")) {
					if (obj[key] == null || obj[key] == 0) {
						obj[key] = null;
					} else {
						obj[key] = crypto.encrypt(obj[key]);
					}
				}
			}
		});
	}

	if (Array.isArray(toEncrypt)) {
		toEncrypt.forEach(function (obj) {
			objIDsEnc(obj.dataValues);
		});
	} else if (toEncrypt != null) {
		objIDsEnc(toEncrypt.dataValues);
	}

	return toEncrypt;
}

module.exports = encryptHelper;
