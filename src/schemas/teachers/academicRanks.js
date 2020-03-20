const Joi = require('@hapi/joi');

module.exports = {
  academicRank: Joi
    .string()
    .max(100)
    .required()
}