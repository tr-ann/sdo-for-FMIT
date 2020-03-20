const Joi = require('@hapi/joi');

module.exports = {
  role: Joi
    .string()
    .max(50)
    .required()
}