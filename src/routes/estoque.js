const express = require('express');
const routes = express.Router();
const controller = require('../controller/estoque');

routes.post('/', controller.salva);
routes.post('/lista', controller.lista);
routes.delete('/:id', controller.deleta);

module.exports = routes;
