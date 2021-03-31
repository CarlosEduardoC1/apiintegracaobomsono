const express = require('express');
const routes = express.Router();
const controller = require('../controller/vendas');

routes.post('/', controller.salva);
routes.post('/lista', controller.lista);

module.exports = routes;
