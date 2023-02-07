const { saveUserAndGenerateAuthToken } = require('../../../controllers/donor.controller');
const User = require('../../../model/donor.model');

describe("saveUserAndGenerateAuthToken", () => {
    it("should save user and generate auth token", async () => {
        // Arrange
        const userData = { email: "test@example.com", password: "password", name: "John Doe", tokens: [] };
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
