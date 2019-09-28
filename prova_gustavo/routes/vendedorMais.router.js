const express = require('express');
const routes = express.Router();
const vendedorMaisController = require('../controller/vendedorMais.controller');

routes.get('/', vendedorMaisController.find);

module.exports = routes;