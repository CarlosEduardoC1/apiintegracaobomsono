const express = require('express');
const routes = express.Router();
const controller = require('../controller/pdf');

routes.post('/', controller.salva);

module.exports = routes;

