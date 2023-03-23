const dotenv = require('dotenv');

dotenv.config({path: './src/.env'});

module.exports = {
	local: {
		localUrlDatabse: process.env.DB_URI,
		secret: "password",
	},
}