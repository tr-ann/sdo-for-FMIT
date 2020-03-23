const Joi = require('@hapi/joi');

module.exports = {
  number: Joi.number().integer().min(1).max(8).required(),
  startTime1: Joi.string().regex(/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/).required(),
  endTime1: Joi.string().regex(/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/).required(),
  startTime2: Joi.string().regex(/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/).required(),
  endTime2: Joi.string().regex(/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/).required(),
};