const { saveUserAndGenerateAuthToken } = require('../../../controllers/user.controller');
const User = require('../../../model/user.model');

describe("saveUserAndGenerateAuthToken", () => {
    it("should save user and generate auth token", async () => {
        // Arrange
        const userData = { email: "test@example.com", password: "password", tokens: [] };
        jest.spyOn(User.prototype, 'save').mockImplementation(() => Promise.resolve(userData));
        jest.spyOn(User.prototype, 'generateAuthToken').mockImplementation(() => Promise.resolve("token"));

        // Act
        const result = await saveUserAndGenerateAuthToken(userData);

        // Assert
        expect(result).toEqual({ user: userData, token: "token" });
        expect(User.prototype.save).toHaveBeenCalled();
        expect(User.prototype.generateAuthToken).toHaveBeenCalled();
    });
});
