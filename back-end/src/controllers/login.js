const LoginService = require('../services/login');

const login = async (req, res, next) => {
  try {
    const { nickname, password } = req.body;

    const { token, user } = await LoginService.login({ nickname, password });

    return res.status(201).json({ token, user  });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
