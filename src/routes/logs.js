const express = require('express');
const routes = express.Router();
const controller = require('../controller/logs');

routes.post('/lista', controller.lista);

module.exports = routes;
