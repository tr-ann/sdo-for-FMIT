const Joi = require('@hapi/joi');

module.exports = {
  fullName: Joi
    .string()
    .max(150)
    .required(),
  shortName: Joi
    .string()
    .max(50)
    .required()
}