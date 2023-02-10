require('dotenv').config({path: "./src/.env"});
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/user.model');

mongoose.set('strictQuery', true);

describe('Test the user model', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  test('It should hash the password before saving the user', async () => {
    const testUser = new User({
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    });
    await testUser.save();
    const savedUser = await User.findById(testUser._id);
    expect(savedUser.password).not.toBe('password123');
    expect(await bcrypt.compare('password123', savedUser.password)).toBe(true);
  });

  test('It should generate an auth token for the user', async () => {
    const testUser = new User({
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    });
    await testUser.save();
    const token = await testUser.generateAuthToken();
    expect(testUser.tokens[0].token).toBe(token);
  });

  test('It should find a user by email and password', async () => {
    const testUser = new User({
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    });
    await testUser.save();
    const foundUser = await User.findByCredentials('testuser@example.com', 'password123');
    expect(foundUser._id).toEqual(testUser._id);
  });
});
