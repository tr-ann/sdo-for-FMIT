const Joi = require('@hapi/joi');

module.exports = {
  login: Joi
    .string()
    .max(100)
    .required(),
  password: Joi
    .string()
    .max(100)
    .required(),
  stayLoggedIn: Joi
    .boolean()
    .required(),
  
};
