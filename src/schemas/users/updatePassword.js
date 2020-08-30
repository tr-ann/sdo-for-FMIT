const Joi = require('@hapi/joi');

module.exports = {
  oldPassword: Joi
    .string()
    .min(6)
    .max(100)
    .required(),
  newPassword: Joi
    .string()
    .min(6)
    .max(100)
    .required(),
};