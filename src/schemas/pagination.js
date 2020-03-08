const Joi = require('@hapi/joi');

module.exports = {
  page: Joi.number().integer().min(1).optional(),
  amount: Joi.number().integer().min(1).optional(),
};