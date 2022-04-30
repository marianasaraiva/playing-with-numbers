const Joi = require('joi');

const userSchema = Joi.object({
  nickname: Joi
    .string()
    .min(2)
    .required(),
  password: Joi
    .string()
    .min(6)
    .required(),
  avatarId: Joi
    .number()
    .required(),
});

module.exports = {
  userSchema,
};
