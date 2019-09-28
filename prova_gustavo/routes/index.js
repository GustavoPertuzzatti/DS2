const express = require('express');
const estadoRoute = require('./tabelaPreco.router.js');
const clienteMaisRoute = require('./clienteMais.router');
const vendedorMaisRoute = require('./vendedorMais.router');
const routes = new express.Router();

routes.use('/tabelaPreco', estadoRoute);
routes.use('/clienteMais', clienteMaisRoute);
routes.use('/vendedorMais', vendedorMaisRoute);

module.exports = routes;