const Joi = require('@hapi/joi');

module.exports = {
  url: Joi
    .string()
    .max(2048)
    .required(),
  method: Joi
    .string()
    .max(20)
    .required()
}