const userRouter = require('express').Router();
const UserController = require('../controllers/user');

userRouter.route('/')
  .get(UserController.getAll)
  .post(UserController.create);

userRouter.route('/:id')
  .get(UserController.getById)
  .put(UserController.update);

module.exports = userRouter;
