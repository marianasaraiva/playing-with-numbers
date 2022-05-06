const userRouter = require('express').Router();
const UserController = require('../controllers/user');
const { validateUser } = require('../middlewares/user');
const auth = require('../middlewares/auth');

userRouter.route('/')
  .get(auth, UserController.getAll)
  .post(validateUser, UserController.create);

userRouter.route('/:id')
  .get(auth, UserController.getById)
  .put(auth, validateUser, UserController.update);

module.exports = userRouter;
