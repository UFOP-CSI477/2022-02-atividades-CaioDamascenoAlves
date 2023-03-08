const request = require('supertest');
const userController = require('../../../controllers/user.controller');
const User = require('../../../model/user.model');
const app = require('../../../app');

describe("loginUser", () => {
	it("should return a 201 response on successful login", async () => {
	  const user = {
		email: "test@example.com",
		password: "password",
		generateAuthToken: jest.fn().mockResolvedValue("token-mock"),
	  };
	  jest.spyOn(User, "findByCredentials").mockResolvedValue(user);
	  const body = { email: "test@example.com", password: "password" };
	  const response = await request(app).post("/api/login").send(body);
	  expect(response.status).toBe(201);
	  expect(response.body.message).toBe("Usuário(a) logado com sucesso!");
	});
  
	it("should return a 401 response on unsuccessful login", async () => {
	  jest.spyOn(User, "findByCredentials").mockResolvedValue(null);
	  const body = { email: "test@example.com", password: "password" };
	  const response = await request(app).post("/api/login").send(body);
	  expect(response.status).toBe(401);
	  expect(response.body.error).toBe(
		"Erro ao Logar! Verifique as suas credenciais de autenticação!"
	  );
	});
  });
  