const Joi = require('@hapi/joi');

module.exports = {
  kind: Joi
    .string()
    .max(20)
    .required(),
  timeSheet: Joi
    .number()
    .min(0)
    .required(),
  lecturesNumber: Joi
    .number()
    .required(),
  practicalsNumber: Joi
    .number()
    .optional(),
  laboratoryWorksNumber: Joi
    .number
    .optional(),
  reviewWorksNumber: Joi
    .number()
    .optional(),
  controlIndependentWork: Joi
    .number()
    .required(),
  reviewWorks: Joi
    .number()
    .required(),
  currentConsultations: Joi
    .number()
    .optional(),
  individualConsultations: Joi
    .number()
    .optional(),
  examinationConsultations: Joi
    .number()
    .optional(),
  exam: Joi
    .number()
    .optional(),
  credit: Joi
    .number()
    .optional(),
  trainingPractice: Joi
    .number()
    .optional(),
  productionPractice: Joi
    .number()
    .optional(),
  courseWork: Joi
    .number()
    .optional(),
  graduateWork: Joi
    .number()
    .optional(),
  masters: Joi
    .number()
    .optional(),
  stateExaminationBoard: Joi
    .number()
    .optional(),
  studentsNumber: Joi
    .number()
    .min(1)
    .required(),
  thread: Joi
    .number()
    .min(1)
    .required(),
  groupsNumber: Joi
    .number()
    .min(1)
    .required(),
  subgroupsNumber: Joi
    .number()
    .optional(),
  disciplineId: Joi
    .number()
    .min(1)
    .required(),
  staffId: Joi
    .number()
    .min(1)
    .required()
}