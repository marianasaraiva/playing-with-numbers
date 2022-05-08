const { Game } = require('../models');

const getAll = async () => {
  const games = await Game.findAll();
  return games;
};

const getById = async (id) => {
  const game = await Game.findByPk(id);
  return game;
};

module.exports = {
  getAll,
  getById,
};
