const loginRouter = require('express').Router();
const LoginController = require('../controllers/login');
const { validateLogin } = require('../middlewares/login');

loginRouter.route('/')
  .post(validateLogin, LoginController.login);

module.exports = loginRouter;