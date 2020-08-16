const Joi = require('@hapi/joi');

module.exports = {
  name: Joi.string().min(1).max(100).required(),
  address: Joi.string().min(1).max(200).required(),
};