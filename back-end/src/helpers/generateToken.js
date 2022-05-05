const jwt = require('jsonwebtoken');

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const payload = {
    image: user.avatar.url,
    nickname: user.nickname,
  };

  const token = jwt.sign({ payload }, process.env.JWT_SECRET, jwtConfig);

  return token;
};