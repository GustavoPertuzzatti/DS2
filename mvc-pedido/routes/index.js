const express = require('express');
const clienteoRoute = require('./cliente.router');
const produtoRoute = require('./produto.router');
const venderdoRoute = require('./vendedor.router');
const pedidodoRoute = require('./pedido.router');
const itemPedidodoRoute = require('./itemPedido.router');
const routes = new express.Router();

routes.use('/cliente', clienteoRoute);
routes.use('/produto', produtoRoute);
routes.use('/pedido', pedidodoRoute);
routes.use('/itemPedido', itemPedidodoRoute);

module.exports = routes;