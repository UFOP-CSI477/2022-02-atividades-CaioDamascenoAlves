const request = require('supertest');
const express = require('express');
const router = require('../../routes/index');

describe('Test the root route', () => {
  test('It should response the GET method', async () => {
    const app = express();
    app.use(router);
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: 'Seja bem-vindo(a) a API Node.js + MongoDB!',
      version: '1.0.0',
    });
  });
});
