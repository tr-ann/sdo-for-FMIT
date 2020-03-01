const Joi = require('@hapi/joi');

module.exports = {
  name: Joi.string().min(1).max(100).required(),
  shortName: Joi.string().min(1).max(20).required(),
};