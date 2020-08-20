const Joi = require('@hapi/joi');

module.exports = {

  passportNumber: Joi
    .string()
    .max(10)
    .optional(),
  passportNumberProvider: Joi
    .string()
    .max(100)
    .optional(),
  passportDate: Joi
    .date()
    .optional(),
  citizenship: Joi
    .string()
    .max(50)
    .optional(),
  isBrsm: Joi
    .boolean()
    .optional()
}