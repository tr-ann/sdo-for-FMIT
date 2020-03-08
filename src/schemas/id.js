const Joi = require('@hapi/joi');

module.exports = {
  id: Joi.number().integer().min(1).required(),
};