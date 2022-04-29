const { userSchema } = require('../schemas/user');

const validateUser = async (req, _res, next) => {
  const { nickname, password, avatarId } = req.body;
  const { error } = userSchema.validate({ nickname, password, avatarId });

  if (error) return next(error);

  next();
};

module.exports = {
  validateUser,
};
