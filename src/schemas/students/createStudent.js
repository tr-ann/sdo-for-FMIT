const Joi = require('@hapi/joi');

module.exports = {
  userId: Joi
    .number()
    .min(1)
    .required(),
  groupId: Joi
    .number()
    .optional(),
  recordBook: Joi
    .string()
    .max(30)
    .required(),
}