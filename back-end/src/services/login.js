const { User } = require('../models');
const { createError, generateToken } = require('../helpers');

const login = async ({ nickname, password }) => {  
  const user = await User.findOne({ where: { nickname, password } });

  if (!user) {
    const error = createError('User not found', 'notFound');

    throw error;
  }

  const token = generateToken(user);

  return token;
};

module.exports = {
  login,
};