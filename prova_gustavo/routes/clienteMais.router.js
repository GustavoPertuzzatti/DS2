const express = require('express');
const routes = express.Router();
const clienteMaisController = require('../controller/clienteMais.controller');

routes.get('/', clienteMaisController.find);

module.exports = routes;