const jwt = require('jsonwebtoken');

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload: user }, process.env.JWT_SECRET, jwtConfig);

  return token;
};