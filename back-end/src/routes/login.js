const loginRouter = require('express').Router();
const LoginController = require('../controllers/login');

loginRouter.route('/')
  .post(LoginController.login);


module.exports = loginRouter;