const Joi = require('@hapi/joi');

module.exports = {
  topic: Joi.string().min(1).max(50).required(),
  name: Joi.string().min(1).max(90).required(),
  createDate: Joi.date().required(),
  updateDate: Joi.date().optional(),
  description: Joi.string().min(1).optional(),
  studentId: Joi.number().integer().min(1).required(),
  teacherId: Joi.number().integer().min(1).required(),
  statusId: Joi.number().integer().min(1).required(),
};