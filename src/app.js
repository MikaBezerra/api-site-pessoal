require('./config/dotenv');
require('express-async-errors');

const express = require('express');
const { initDataBase } = require('./config/db');

const experienciasRoute = require('./routes/experienciasRoute');
const portfoliosRoute = require('./routes/portfoliosRoute');
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');
const cors = require('cors');

const app = express();

const port = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Bem vindo!');
});

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolios', portfoliosRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDataBase();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({'Erro': err.message});
});

app.listen(port, () => {
  console.log(`Servidor a todo vapor! Cuida na porta ${port}!`);
});
