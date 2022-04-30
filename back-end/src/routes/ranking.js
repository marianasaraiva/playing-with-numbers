const rankingRouter = require('express').Router();
const RankingController = require('../controllers/rankinggame');

rankingRouter.route('/')
  .get(RankingController.getAll);


module.exports = rankingRouter;