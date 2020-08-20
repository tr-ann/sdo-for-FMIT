const Joi = require('@hapi/joi');

module.exports = {

  cityId: Joi
    .number()
    .optional(),
  address: Joi
    .string()
    .max(255)
    .optional(),
  sex: Joi
    .string()
    .max(1)
    .optional(),
  birthday: Joi
    .date()
    .optional(),
  finishedEducationId: Joi
    .number()
    .optional(),
  diseases: Joi
    .string()
    .max(255)
    .optional(),
  peGroup: Joi
    .string()
    .max(20)
    .optional(),
  individualInfo: Joi
    .string()
    .optional(),
}