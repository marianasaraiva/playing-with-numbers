const { Game, User } = require('../models');

const getByGameId = async (id) => {
  const ranking = await Game.findAll({
    where: { id },
    include:
      [
        { model: User,
          as: 'users',
          through: { attributes: ['score'] },
          attributes: { exclude: ['password', 'id'] },
        },
      ],
  });
  return ranking;
};

module.exports = {
  getByGameId,
};
