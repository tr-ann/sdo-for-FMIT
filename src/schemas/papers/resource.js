const Joi = require('@hapi/joi');

module.exports = {
  description: Joi.string().min(1).optional(),
};