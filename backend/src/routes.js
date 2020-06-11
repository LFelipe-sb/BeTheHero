const express = require("express");
const ongsController = require('./Controllers/ongsController');

//Variavel utilizada para criar as rotas de GET, POST, PUT e DELETE.
const routes = express.Router();

//Metodos para poder criar a primeira rota e exibir os dados no navegador.
routes.post('/ongs', ongsController.create);

//Metodo criado para listar todos os dados que existem dentro de uma determinada tabela no banco.
routes.get('/ongs', ongsController.list);

//Exportando o modulo "routes" para ser usado no index.js
module.exports = routes;
