const Crypto = require("crypto");
const secret_key = "123456789";
const secret_iv = "smslt";
const encrptionMethod = "AES-256-CBC";
const key = Crypto.createHash("sha512").update(secret_key, "utf-8").digest("hex").substr(0, 32);
const iv = Crypto.createHash("sha512").update(secret_iv, "utf-8").digest("hex").substr(0, 16);

const encrypt = (plain_text) => {
	let encryptor = Crypto.createCipheriv(encrptionMethod, key, iv);
	let aes_encrypted = encryptor.update(String(plain_text), "utf-8", "base64") + encryptor.final("base64");
	return Buffer.from(aes_encrypted).toString("base64");
};

const decrypt = (message) => {
	let buffer = Buffer.from(message, "base64");
	message = buffer.toString("utf-8");
	let decryptor = Crypto.createDecipheriv(encrptionMethod, key, iv);
	return decryptor.update(message, "base64", "utf-8") + decryptor.final("utf-8");
};

module.exports = { encrypt, decrypt };
