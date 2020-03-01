const Joi = require('@hapi/joi');

module.exports = {
  topic: Joi.string().min(1).max(50).required(),
  name: Joi.string().min(1).max(90).required(),
  createDate: Joi.date().required(),
  updateDate: Joi.date().required(),
  description: Joi.string().min(1).optional(),
  studentId: Joi.number().integer().min(1).required(),
  organizationId: Joi.number().integer().min(1).required(),
  statusId: Joi.number().integer().min(1).required(),
  practiceTypeId: Joi.number().integer().min(1).required(),
  resourceId: Joi.number().integer().min(1).required(),
};