const Joi = require('@hapi/joi');

module.exports = {
  subject: Joi
    .string()
    .max(100)
    .required(),
  course: Joi
    .number()
    .min(1)
    .required(),
  semester: Joi
    .number()
    .min(1)
    .required(),
  form: Joi
    .string()
    .max(10)
    .required(),
  timeSheet: Joi
    .number()
    .required(),
  eng: Joi
    .boolean()
    .required(),
  specialtyId: Joi
    .number()
    .min(1)
    .required()
}