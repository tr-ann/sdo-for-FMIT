const Joi = require('@hapi/joi');

module.exports = {
  phone: Joi
    .string()
    .max(30)
    .optional()
}