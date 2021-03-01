const mongoose = require('mongoose');

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@clusterxis-6owt6.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options);

mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
  console.log(`Erro na conexão com o banco de dados: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Conexão encerrada com o banco de dados!');
});

mongoose.connection.on('connected', () => {
  console.log('Conexão estabelicida com o banco de dados!');
});

module.exports = () => mongoose;
