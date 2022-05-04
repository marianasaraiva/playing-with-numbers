const rankingRouter = require('express').Router();
const RankingController = require('../controllers/rankinggame');

rankingRouter.route('/:gameId')
  .get(RankingController.getByGameId);


module.exports = rankingRouter;
