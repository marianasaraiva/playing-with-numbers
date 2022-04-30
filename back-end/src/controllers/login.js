const LoginService = require('../services/login');

const login = async (req, res, next) => {
  try {
    const { nickname, password } = req.body;

    const token = await LoginService.login({ nickname, password });

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
