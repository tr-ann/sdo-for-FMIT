const Joi = require('@hapi/joi');

module.exports = {
  firstName: Joi
    .string()
    .max(40)
    .required(),  
  lastName: Joi
    .string()
    .max(40)
    .required(),
  middleName: Joi
    .string()
    .max(40)
    .optional(),
  password: Joi
    .string()
    .min(6)
    .max(100)
    .required(),
};