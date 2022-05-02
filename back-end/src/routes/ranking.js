const rankingRouter = require('express').Router();
const RankingController = require('../controllers/rankinggame');

rankingRouter.route('/game/:id')
  .get(RankingController.getByGameId);


module.exports = rankingRouter;