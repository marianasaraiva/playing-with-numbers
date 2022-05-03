const { User, RankingGame } = require('../models');

const getByGameId = async (id) => {
  const ranking = await RankingGame.findAll({
    where: { gameId: id },
    include: [
      {
        model: User,
        as: 'users'
      }
    ],
    order: [['score', 'DESC']],
    limit: 10,
  });

  return ranking;
};

module.exports = {
  getByGameId,
};
