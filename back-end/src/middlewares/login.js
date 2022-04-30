const { loginSchema } = require('../schemas/login');

const validateLogin = async (req, _res, next) => {
  const { nickname, password} = req.body;
  const { error } = loginSchema.validate({ nickname, password});

  if (error) return next(error);

  next();
};

module.exports = {
  validateLogin,
};
