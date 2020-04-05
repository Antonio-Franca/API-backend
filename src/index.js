const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); // Gerenciar multiplos models

//Iniciando o app
const app = express();
app.use(cors());

//Permitir envio de informações em formato json
app.use(express.json());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/dbapi',{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true
});

requireDir('./models');

//Rotas
app.use('/',require('./routes'));

app.listen(3002);