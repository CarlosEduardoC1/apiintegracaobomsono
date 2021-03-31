const express = require('express');
const routes = express.Router();
const controller = require('../controller/users');

routes.post('/', controller.salva);
routes.post('/verificaemail', controller.getMail);
routes.post('/lista', controller.lista);
routes.delete('/:id', controller.deleta);

module.exports = routes;
