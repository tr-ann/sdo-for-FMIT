const Joi = require('@hapi/joi');

module.exports = {
  fullName: Joi
    .string()
    .max(150)
    .exist()
    .optional(),
  groupId: Joi
    .number()
    .exist()
    .optional(),
  recordBook: Joi
    .string()
    .max(30)
    .exist()
    .optional(),
}