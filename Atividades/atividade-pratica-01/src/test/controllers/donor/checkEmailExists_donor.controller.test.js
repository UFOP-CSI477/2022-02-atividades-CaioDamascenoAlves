let { checkIfEmailExists } = require('../../../controllers/user.controller');
const User = require('../../../model/user.model');

describe("checkIfEmailExists", () => {
    it("should return true if email exists", async () => {
        // Arrange
        const email = "test@example.com";
        const user = { email };
        User.find = jest.fn().mockResolvedValue([user]);

        // Act
        const result = await checkIfEmailExists(email);

        // Assert
        expect(result).toBe(true);
        expect(User.find).toHaveBeenCalledWith({ email });
    });

    it("should return false if email does not exist", async () => {
        // Arrange
        const email = "test@example.com";
        User.find = jest.fn().mockResolvedValue([]);

        // Act
        const result = await checkIfEmailExists(email);

        // Assert
        expect(result).toBe(false);
        expect(User.find).toHaveBeenCalledWith({ email });
    });
});
