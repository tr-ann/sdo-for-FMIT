const Joi = require('@hapi/joi');

module.exports = {
  login: Joi
    .string()
    .min(4)
    .max(30)
    .required(),
  password: Joi
    .string()
    .min(6)
    .max(30)
    .required(),
};