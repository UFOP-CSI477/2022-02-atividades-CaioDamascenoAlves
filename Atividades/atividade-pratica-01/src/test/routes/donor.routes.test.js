const request = require('supertest');
const app = require('../../app');

describe('POST /register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({name: 'John Doe', email: 'johndoe@example.com', password: 'password'})
      .expect(201);
    expect(res.body).toHaveProperty('message', 'New user registered successfully');
  });
});
