const { validateToken, createError } = require('../helpers');

module.exports =  (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const error = createError('Token not found', 'forbidden');

    return next(error);
  }

  const user = validateToken(token);

  if (!user) {
    const error = createError('User unauthorized', 'forbidden');

    return next(error);
  }

  next();
}; 