const RankingService = require('../services/rankinggame');

const getAll = async (_req, res, next) => {
  try {
    const ranking = await RankingService.getAll();

    return res.status(200).json(ranking);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};