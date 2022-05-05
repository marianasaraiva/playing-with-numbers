const rankingRouter = require('express').Router();
const RankingController = require('../controllers/rankinggame');
const { validateRanking } = require('../middlewares/ranking');

rankingRouter.route('/:gameId')
  .get(RankingController.getByGameId);

rankingRouter.route('/')
  .post(validateRanking, RankingController.create);

module.exports = rankingRouter;
