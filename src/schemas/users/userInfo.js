const Joi = require('@hapi/joi');

module.exports = {
  user_id: Joi
    .number()
    .min(1)
    .required(),
  full_name: Joi
    .string()
    .min(1)
    .max(255)
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