const { userSchema } = require('../schemas/user');

const validateUser = async (req, _res, next) => {
  const { nickname, password, avatar } = req.body;
  const { error } = userSchema.validate({ nickname, password, avatar });

  if (error) return next(error);

  next();
};

module.exports = {
  validateUser,
};
