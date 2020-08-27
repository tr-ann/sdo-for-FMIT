const Joi = require('@hapi/joi');

module.exports = {
  lastName: Joi
    .string()
    .min(1)
    .max(255)
    .required(),
  firstName: Joi
    .string()
    .min(1)
    .max(255)
    .required(),
  middleName: Joi
    .string()
    .min(1)
    .max(255)
    .optional(),
  email: Joi
    .string()
    .email()
    .max(255)
    .required(),
  birthday: Joi
    .string()
    .min(10)
    .required(),
  sex: Joi
    .string()
    .max(1)
    .required(),
};