const request = require('supertest');
const app = require('../../server');

describe('Server Configuration', () => {
    it('should start the server on the correct port', async () => {
        const response = await request(app).get('/api');
        expect(response.statusCode).toBe(200);
    });
});
