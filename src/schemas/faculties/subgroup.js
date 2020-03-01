const Joi = require('@hapi/joi');

module.exports = {
  name: Joi.string().min(2).max(4).required(),
  groupId: Joi.number().integer().min(1).optional(),
};