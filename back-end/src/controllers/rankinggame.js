const RankingService = require('../services/rankinggame');

const getByGameId = async (req, res, next) => {
  try {
    const { gameId } = req.params; 
    const ranking = await RankingService.getByGameId(gameId);

    return res.status(200).json(ranking);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getByGameId,
};
