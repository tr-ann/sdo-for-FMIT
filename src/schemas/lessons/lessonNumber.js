const Joi = require('@hapi/joi');

module.exports = {
  number: Joi.number().integer().min(1).max(8).required(),
  startTime1: Joi.date().required(),
  endTime1: Joi.date().required(),
  startTime2: Joi.date().required(),
  endTime2: Joi.date().required(),
};