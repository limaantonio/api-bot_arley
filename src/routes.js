const express = require('express');
const api = require('./services/api')

const ApiController = require('./controllers/ApiController');
const QuizController = require('./controllers/QuizController');

const routes = express.Router();

routes.post('/apiwebhook', ApiController.fulfillmentText);
routes.get('/listStudents', ApiController.listStudents);
routes.post('/createStudent', ApiController.createStudent);

routes.get('/login/:registration', ApiController.loginStudent);

routes.get('/form/:id', QuizController.sendQuestion);
routes.post('/create_quiz', QuizController.createQuiz);

routes.post('/send_answer/:id', QuizController.sendAnswer);
routes.get('/list_quiz', QuizController.list);



module.exports = routes;