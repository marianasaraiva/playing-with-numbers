const GameService = require('../services/game');

const getAll = async (_req, res, next) => {
  try {
    const games = await GameService.getAll();

    return res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await GameService.getById(id);

    return res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
