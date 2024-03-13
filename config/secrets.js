module.exports = {
	projectName: process.env.PROJECT_NAME,

	host: process.env.HOST,
	port: process.env.PORT,

	frontend_URL: process.env.FRONTEND_URL,

	dropboxToken: process.env.DROPBOX_TOKEN,

	crypto: {
		algorithm: process.env.CRYPTO_ALGORITHM,
		password: process.env.CRYPTO_PASSWORD
	},

	email: {
		send: process.env.EMAIL_SEND,
		auth: {
			from: process.env.EMAIL_FROM,
			api_key: process.env.EMAIL_API_KEY
		},
		error: process.env.EMAIL_TO_ERROR
	}
};
