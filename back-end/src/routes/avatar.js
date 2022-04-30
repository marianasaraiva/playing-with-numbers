const avatarRouter = require('express').Router();
const AvatarController = require('../controllers/avatar');

avatarRouter.route('/')
  .get(AvatarController.getAll);

avatarRouter.route('/:id')
  .get(AvatarController.getById);

module.exports = avatarRouter;
