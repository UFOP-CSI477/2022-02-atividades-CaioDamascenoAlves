const { saveUserAndGenerateAuthToken } = require('../../../controllers/user.controller');
const Pessoa = require('../../../model/user.model');

describe("saveUserAndGenerateAuthToken", () => {
    it("should save user and generate auth token", async () => {
        // Arrange
        const userData = { email: "test@example.com", password: "password", name: "John Doe", tokens: [] };
        jest.spyOn(Pessoa.prototype, 'save').mockImplementation(() => Promise.resolve(userData));
        jest.spyOn(Pessoa.prototype, 'generateAuthToken').mockImplementation(() => Promise.resolve("token"));

        // Act
        const result = await saveUserAndGenerateAuthToken(userData);

        // Assert
        expect(result).toEqual({ user: userData, token: "token" });
        expect(Pessoa.prototype.save).toHaveBeenCalled();
        expect(Pessoa.prototype.generateAuthToken).toHaveBeenCalled();
    });
});
