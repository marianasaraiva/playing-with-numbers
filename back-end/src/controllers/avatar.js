const AvatarService = require('../services/avatar');

const getAll = async (_req, res, next) => {
  try {
    const avatars = await AvatarService.getAll();

    return res.status(200).json(avatars);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const avatar = await AvatarService.getById(id);

    return res.status(200).json(avatar);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};
