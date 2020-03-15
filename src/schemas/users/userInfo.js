const Joi = require('@hapi/joi');

module.exports = {
  fullName: Joi
    .string()
    .min(1)
    .max(255)
    .required(),
  email: Joi
    .email()
    .string(255)
    .required(),
  sex: Joi
    .string(2)
    .required(),
  description: Joi
    .string()
    .optional(),
  birthday: Joi
    .date()
    .required(),
  city: Joi
    .string()
    .min(1)
    .max(255)
    .optional(),
  address: Joi
    .string()
    .min(1)
    .max(255)
    .optional(),
};