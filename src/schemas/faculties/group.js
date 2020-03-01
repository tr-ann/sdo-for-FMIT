const Joi = require('@hapi/joi');

module.exports = {
  number: Joi.string().min(1).max(100).required(),
  facultyId: Joi.number().integer().min(1).optional(),
  specialtyId: Joi.number().integer().min(1).optional(),
  studyModeId: Joi.number().integer().min(1).optional(),
};