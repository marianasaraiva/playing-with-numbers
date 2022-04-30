const Joi = require('joi');

const loginSchema = Joi.object({
  nickname: Joi
    .string()
    .min(2)
    .required(),
  password: Joi
    .string()
    .min(6)
    .required(),
});

module.exports = {
  loginSchema,
};
