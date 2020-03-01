const Joi = require('@hapi/joi');

module.exports = {
  description: Joi.string().min(1).optional(),
  phoneNumber: Joi.string().min(1).max(30).required(),
};