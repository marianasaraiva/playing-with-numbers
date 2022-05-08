const gameRouter = require('express').Router();
const GameController = require('../controllers/game');

gameRouter.route('/')
  .get(GameController.getAll);

gameRouter.route('/:id')
  .get(GameController.getById);

module.exports = gameRouter;
