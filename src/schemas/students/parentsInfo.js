const Joi = require('@hapi/joi');

module.exports = {

  firstParentName: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  firstParentWork: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  firstParentAddress: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  firstParentPhone: Joi
    .string()
    .max(50)
    .allow(null, '')
    .optional(),
  secondParentName: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  secondParentWork: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  secondParentAddress: Joi
    .string()
    .max(255)
    .allow(null, '')
    .optional(),
  secondParentPhone: Joi
    .string()
    .max(50)
    .allow(null, '')
    .optional(),
}