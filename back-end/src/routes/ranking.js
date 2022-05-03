const rankingRouter = require('express').Router();
const RankingController = require('../controllers/rankinggame');

rankingRouter.route('/:id')
  .get(RankingController.getByGameId);


module.exports = rankingRouter;
