const Joi = require('@hapi/joi');

module.exports = {
  login: Joi
    .string()
    .min(2)
    .max(100)
    .required(),
  password: Joi
    .string()
    .min(6)
    .max(100)
    .required(),
};