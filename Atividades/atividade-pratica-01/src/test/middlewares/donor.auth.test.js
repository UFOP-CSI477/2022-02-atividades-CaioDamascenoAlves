const jwt = require('jsonwebtoken');
const authMiddleware = require('../../middlewares/donor.auth');

describe('Auth Middleware', () => {
  test('It should correctly decode the token', async () => {
    const req = {
      headers: {
        authorization: 'Bearer mysecretjwt'
      }
    };
    const res = {};
    const next = jest.fn();
    jwt.verify = jest.fn(() => ({ userId: '1' }));
    await authMiddleware(req, res, next);
    expect(jwt.verify).toHaveBeenCalledWith('mysecretjwt', 'secret');
    expect(req.userData).toEqual({ userId: '1' });
    expect(next).toHaveBeenCalled();
  });

  test('It should return an error if the token is invalid', async () => {
    const req = {
      headers: {
        authorization: 'Bearer mysecretjwt'
      }
    };
    const res = {
		status: jest.fn().mockReturnValue({ json: jest.fn() }),
	};  
    const next = jest.fn();
    jwt.verify = jest.fn(() => {
      throw new Error('Invalid token');
    });
    await authMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.status().json).toHaveBeenCalledWith({ message: 'Falha na Autenticação!' });
    expect(next).not.toHaveBeenCalled();
  });
});
