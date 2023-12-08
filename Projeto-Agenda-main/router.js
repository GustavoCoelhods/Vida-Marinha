const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const forcaController = require('./src/controllers/forcaController');
const doacaoController = require('./src/controllers/doacaoController');
const quizController = require('./src/controllers/quizController')
const contatoController = require('./src/controllers/contatoController');
const { loginRequired } = require('./src/middlewares/middleware');

route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);



//Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);



//Rotas de forca
route.get('/forca/index', forcaController.index);
//Rota de quiz
route.get('/quiz/index', quizController.index);
//Rota de doacao
route.get('/doacao/index', doacaoController.index);

module.exports = route;