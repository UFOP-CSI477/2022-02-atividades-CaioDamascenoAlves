const mongoose =require("mongoose");
const conn = require("../../config/mongooseConnection.config");

describe('connectToDB', () => {
  it('should connect to the database', async () => {
    await conn.connectToDB();
    expect(mongoose.connection.readyState).toBe(1);
  });
});

describe('closeDBConnection', () => {
  it('should close the connection to the database', async () => {
    await conn.closeDBConnection();
    expect(mongoose.connection.readyState).toBe(0);
  });
});

describe('SIGINT and SIGTERM signals', () => {
  it('should close the connection to the database when SIGINT is emitted', async () => {
    process.emit('SIGINT');
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(mongoose.connection.readyState).toBe(0);
  });

  it('should close the connection to the database when SIGTERM is emitted', async () => {
    process.emit('SIGTERM');
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(mongoose.connection.readyState).toBe(0);
  });
});
