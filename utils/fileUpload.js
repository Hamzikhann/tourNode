function fileUpload(dest) {
	const multer = require("multer");

	const fileStorage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, `./uploads/${dest}`);
		},
		filename: (req, file, cb) => {
			let fileName = file.originalname.split(" ").join("-");
			cb(null, Date.now().toString() + "-" + fileName);
		}
	});
	const upload = multer({
		storage: fileStorage,
		fileFilter: (req, files, cb) => {
			console.log(files);
			if (files.mimetype === "application/pdf" || files.mimetype == "image/png" || files.mimetype === "image/jpeg") {
				cb(null, true);
			} else {
				cb(null, false);
				return cb(new Error("only PDF files are allowed"));
			}
		},
		limit: { fileSize: 1024 }
	});
	return {
		upload: upload
	};
}
module.exports = fileUpload;
