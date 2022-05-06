const { User } = require('../models');
const { createError } = require('../helpers');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const create = async ({ nickname, password, avatarId }) => {
  const existingUser = await User.findOne({ where: { nickname } });

  if (existingUser) {
    const error = createError('User already exists', 'alreadyExists');
    throw error;
  }

  const user = await User.create({ nickname, password, avatarId });

  return user;
};

const update = async ({ id, nickname, password, avatarId }) => {
  const existingUser = await User.findOne({ where: { id } });

  if (!existingUser) {
    const error = createError('User not found', 'notFound');

    throw error;
  }

  await User.update({ nickname, password, avatarId }, { where: { id } });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
