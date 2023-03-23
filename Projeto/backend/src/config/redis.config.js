const Redis = require('ioredis');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config({path: './src/.env'});


const client = Redis.createClient(process.env.REDIS_URL);

client.on('connect', () => {
  console.log('Conexão com Redis estabelecida');
});

client.on('error', (err) => {
  console.error(`Erro ao conectar com Redis: ${err}`);
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

module.exports = { getAsync, setAsync };