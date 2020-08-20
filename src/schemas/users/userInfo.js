const Joi = require('@hapi/joi');

module.exports = {
  fullName: Joi
    .string()
    .min(1)
    .max(255)
    .required(),
  email: Joi
    .string()
    .email()
    .max(255)
    .required(),
  sex: Joi
    .string()
    .max(2)
    .required(),
  description: Joi
    .string()
    .optional(),
  birthday: Joi
    .string()
    .min(10)
    .required(),
  cityId: Joi
    .number()
    .optional(),
  address: Joi
    .string()
    .max(255)
    .optional(),
};