const Joi = require('@hapi/joi');

module.exports = {
  position: Joi
    .string()
    .max(100)
    .required()
}