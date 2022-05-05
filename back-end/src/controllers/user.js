const UserService = require('../services/user');

const getAll = async (_req, res, next) => {
  try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { nickname, password, avatarId } = req.body;
    const user = await UserService.create({ nickname, password, avatarId });

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nickname, password, avatarId } = req.body;
    await UserService.update({ id, nickname, password, avatarId });

    return res.status(201).json({ message: 'User updated successfully'});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
