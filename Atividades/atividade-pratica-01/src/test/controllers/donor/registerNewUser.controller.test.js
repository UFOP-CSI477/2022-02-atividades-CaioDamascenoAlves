const request = require('supertest');
const userController = require('../../../controllers/user.controller')
const app = require('../../../app');

describe("registerNewUser", () => {
    it("should return a 201 response", async () => {
        const body = { email: "test@example.com", password: "password"};
        const response = await request(app).post('/api/register').send(body);
        expect(response.status).toBe(201);
    });	

	it("should return a 409 response when an email already exists", async () => {
		jest.spyOn(userController, 'checkIfEmailExists').mockImplementation(() => true);
		const body = { email: "test@example.com", password: "password" };
		const response = await request(app).post('/api/register').send(body);
		expect(response.status).toBe(409);
		expect(response.body.message).toBe("Sorry! This email is already registered ");
	});
});