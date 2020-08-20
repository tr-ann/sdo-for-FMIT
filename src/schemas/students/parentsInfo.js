const Joi = require('@hapi/joi');

module.exports = {

  firstParentName: Joi
    .string()
    .max(255)
    .optional(),
  firstParentWork: Joi
    .string()
    .max(255)
    .optional(),
  firstParentAddress: Joi
    .string()
    .max(255)
    .optional(),
  firstParentPhone: Joi
    .string()
    .max(50)
    .optional(),
  secondParentName: Joi
    .string()
    .max(255)
    .optional(),
  secondParentWork: Joi
    .string()
    .max(255)
    .optional(),
  secondParentAddress: Joi
    .string()
    .max(255)
    .optional(),
  secondParentPhone: Joi
    .string()
    .max(50)
    .optional(),
}