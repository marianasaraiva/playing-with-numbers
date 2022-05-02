const { User, Avatar } = require('../models');
const { createError, generateToken } = require('../helpers');

const login = async ({ nickname, password }) => {  
  const user = await User.findOne({ 
    where: { nickname, password },
    include:
    [
      { model: Avatar,
        as: 'avatar',
        attributes: { exclude: ['name', 'id'] },
      },
    ],
  });

  if (!user) {
    const error = createError('User not found', 'notFound');

    throw error;
  }

  const token = generateToken(user);
  console.log("user", user);
  return { token, user };
};

module.exports = {
  login,
};