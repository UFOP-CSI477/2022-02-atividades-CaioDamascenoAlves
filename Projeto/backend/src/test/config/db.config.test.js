const dotenv = require('dotenv');
const dbConfig = require('../../config/db.config');

describe('Database Configuration', () => {
	it('should set the connection string using dotenv', () => {
		expect(dbConfig.local.localUrlDatabse).toBe(process.env.DB_URI);
	});
});