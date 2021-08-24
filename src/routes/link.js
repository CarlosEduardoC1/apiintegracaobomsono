const express = require('express');
const routes = express.Router();
const controller = require('../controller/link');

routes.post('/update', controller.atualiza);
routes.get('/get', controller.getLink);

module.exports = routes;
