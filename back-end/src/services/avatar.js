const { Avatar } = require('../models');

const getAll = async () => {
  const avatars = await Avatar.findAll();
  return avatars;
};

const getById = async (id) => {
  const avatar = await Avatar.findByPk(id);
  return avatar;
};

module.exports = {
  getAll,
  getById,
};
