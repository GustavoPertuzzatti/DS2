const express = require('express');
const estadoRoute = require('./estado.router');
const routes = new express.Router();

routes.use('/estado', estadoRoute);

module.exports = routes;