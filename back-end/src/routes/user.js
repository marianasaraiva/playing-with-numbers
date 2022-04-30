const userRouter = require('express').Router();
const UserController = require('../controllers/user');
const { validateUser } = require('../middlewares/user');

userRouter.route('/')
  .get(UserController.getAll)
  .post(validateUser, UserController.create);

userRouter.route('/:id')
  .get(UserController.getById)
  .put(validateUser, UserController.update);

module.exports = userRouter;
