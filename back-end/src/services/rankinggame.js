const { Game, User } = require('../models');

const getAll = async () => {
  const ranking = await Game.findAll({
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
  getAll,
};
