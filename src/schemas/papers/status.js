const Joi = require('@hapi/joi');

module.exports = {
    name: Joi.string().min(1).max(30).required(),
};