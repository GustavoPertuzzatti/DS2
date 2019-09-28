const express = require('express');
const routes = express.Router();
const tabelaPrecoController = require('../controller/tabelaPreco.controller');

routes.get('/', tabelaPrecoController.find);
routes.post('/', tabelaPrecoController.create);
routes.get('/:id([0-9]+)', tabelaPrecoController.findByID);
routes.put('/:id([0-9]+)', tabelaPrecoController.update);
routes.delete('/:id([0-9]+)', tabelaPrecoController.delete);

module.exports = routes;