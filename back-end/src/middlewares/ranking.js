const { rankingSchema } = require('../schemas/ranking');

const validateRanking = (req, _res, next) => {
  const { score, gameId, userId } = req.body;
  const { error } = rankingSchema.validate({ score, gameId, userId });

  if (error) return next(error);

  next();
};

module.exports = {
  validateRanking,
};
