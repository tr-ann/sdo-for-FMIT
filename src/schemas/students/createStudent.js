const Joi = require('@hapi/joi');

module.exports = {
  userId: Joi
    .number()
    .min(1)
    .required(),
  fullName: Joi
    .string()
    .max(150)
    .exist()
    .optional(),
  groupId: Joi
    .number()
    .optional(),
  recordBook: Joi
    .string()
    .max(30)
    .required(),
}