const Joi = require('@hapi/joi');

module.exports = {

  cityId: Joi
    .number()
    .allow(null)
    .optional(),
  address: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  sex: Joi
    .string()
    .max(1)
    .allow(null, '')
    .optional(),
  birthday: Joi
    .date()
    .allow(null)
    .optional(),
  finishedEducationId: Joi
    .number()
    .allow(null, '')
    .optional(),
  diseases: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  peGroup: Joi
    .string()
    .max(20)
    .allow(null, '')
    .optional(),
  individualInfo: Joi
    .string()
    .allow(null, '')
    .optional(),
}
