const express = require('express');
const api = require('./services/api')

const ApiController = require('./controllers/ApiController')

const routes = express.Router();

routes.post('/apiwebhook', ApiController.fulfillmentText);
routes.get('/listStudents', ApiController.listStudents);
routes.post('/teste', ApiController.createStudent);

module.exports = routes;