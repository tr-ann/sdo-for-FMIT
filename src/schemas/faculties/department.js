const Joi = require('@hapi/joi');

module.exports = {
  name: Joi.string().min(1).max(100).required(),
  facultyId: Joi.number().integer().min(1).required(),
  ownerId: Joi.number().integer().min(1).optional(),
  phone: Joi.string().min(1).max(30).optional(),
  lectureRoomId: Joi.number().integer().min(1).optional(),
};