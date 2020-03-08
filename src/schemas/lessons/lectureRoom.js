const Joi = require('@hapi/joi');

module.exports = {
  number: Joi.string().min(1).max(10).required(),
  seatsCount: Joi.number().integer().min(0).required(),
  roomTypeId: Joi.number().integer().min(1).required(),
  buildingId: Joi.number().integer().min(1).required(),
};