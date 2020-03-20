const Joi = require('@hapi/joi');

module.exports = {
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