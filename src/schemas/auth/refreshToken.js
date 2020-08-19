const Joi = require('@hapi/joi');

module.exports = {
  refreshToken: Joi
    .string()
    .min(1)
    .max(255)
    .required(),
};
