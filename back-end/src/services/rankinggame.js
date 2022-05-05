const { User, Avatar, RankingGame } = require('../models');

const getByGameId = async (gameId) => {
  const ranking = await RankingGame.findAll({
    where: { gameId },
    include: [
      {
        model: User,
        as: 'users',
        attributes: { exclude: ['password', 'id'] },
        include: [
          {
            model: Avatar,
            as: 'avatar',
            attributes: { exclude: ['name', 'id'] },
          },
        ],
      },
    ],
    order: [['score', 'DESC']],
    limit: 10,
  });

  return ranking;
};

const create = async ({ score, gameId, userId }) => {
  const ranking = await RankingGame.create({ score, gameId, userId });

  return ranking;
};

module.exports = {
  getByGameId,
  create,
};
