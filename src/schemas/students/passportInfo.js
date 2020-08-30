const Joi = require('@hapi/joi');

module.exports = {

  passportNumber: Joi
    .string()
    .max(10)
    .exist()
    .allow(null, '')
    .optional(),
  passportNumberProvider: Joi
    .string()
    .max(100)
    .exist()
    .allow(null, '')
    .optional(),
  passportDate: Joi
    .date()
    .exist()
    .allow(null)
    .optional(),
  citizenship: Joi
    .string()
    .max(50)
    .allow(null, '')
    .optional(),
  isBrsm: Joi
    .boolean()
    .allow(null)
    .optional()
}