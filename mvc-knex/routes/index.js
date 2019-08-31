const express = require('express');
const estadoRoute = require('./estado.router');
const cidadeRoute = require('./cidade.router');
const routes = new express.Router();

routes.use('/estado', estadoRoute);
routes.use('/cidade', cidadeRoute);

module.exports = routes;