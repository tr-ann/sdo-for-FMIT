const Joi = require('@hapi/joi');

module.exports = {
  academicDegree: Joi
    .string()
    .max(100)
    .required()
}