const Joi = require('@hapi/joi');

module.exports = {
  rate: Joi
    .number()
    .min(0)
    .required(),
  min: Joi
    .number()
    .min(0)
    .required(),
  max: Joi
    .number()
    .min(0)
    .required(),
  note: Joi
    .string()
    .max(255)
    .optional(),
  teacherId: Joi
    .number()
    .min(1)
    .required()
}