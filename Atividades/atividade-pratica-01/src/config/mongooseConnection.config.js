const mongoose = require('mongoose');

const db = require('./db.config');

mongoose.set('strictQuery', true);

let connected = false;

const connectToDB = async () => {
  if (connected) {
    console.log("A conexão já foi estabelecida");
    return;
  }
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    connected = true;
  } catch (err) {
    console.log(`Erro ao conectar com o banco de dados: ${err}`);
    process.exit(1);
  }
};

const closeDBConnection = async () => {
  try {
    await mongoose.connection.close();
    console.log('Conexão com o banco de dados fechada');
  } catch (err) {
    console.log(`Erro ao fechar a conexão com o banco de dados: ${err}`);
    process.exit(1);
  }
};

process.on('SIGINT', () => {
	closeDBConnection().then(() => {
	  console.log('Conexão com o banco de dados fechada com sucesso.');
	});
});
  

process.on('SIGTERM', () => {
	closeDBConnection().then(() => {
	  console.log('Conexão com o banco de dados fechada com sucesso.');
	});
});
  

module.exports = { connectToDB, closeDBConnection };