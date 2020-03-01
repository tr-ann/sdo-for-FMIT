const Joi = require('@hapi/joi');

module.exports = {
  groupId: Joi.number().integer().min(1).optional(),
  subgroupId: Joi.number().integer().min(1).optional(),
  teacherId: Joi.number().integer().min(1).optional(),
  lectureRoomId: Joi.number().integer().min(1).optional(),
  lessonTypeId: Joi.number().integer().min(1).required(),
  disciplineId: Joi.number().integer().min(1).required(),
  lessonNumberId: Joi.number().integer().min(1).required(),
  weekDay: Joi.number().integer().min(0).max(6).required(),
};