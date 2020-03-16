const Joi = require('@hapi/joi');

module.exports = {
  jwt: Joi
    .string()
    .max(255)
    .required,
  oldPassword: Joi
    .string()
    .min(6)
    .max(100)
    .optional(),
  newPassword: Joi
    .string()
    .min(6)
    .max(100)
    .optional(),
};