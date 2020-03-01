const Joi = require('@hapi/joi');

module.exports = {
    name: Joi.string().min(1).max(90).required(),
};