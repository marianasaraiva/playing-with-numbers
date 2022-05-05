const Joi = require('joi');

const rankingSchema = Joi.object({
  score: Joi
    .number()
    .required(),
  gameId: Joi
    .number()
    .required(),
  userId: Joi
    .number()
    .required(),
});

module.exports = {
  rankingSchema,
};
