module.exports.id = require('./id');
module.exports.pagination = require('./pagination');
module.exports.lessons = require('./lessons');
module.exports.faculties = require('./faculties');
module.exports.papers = require('./papers');
module.exports.users = require('./users')

// Уточнить, что делать с проблемой схем:
// - отсутствие Joi.object().with()
// - отсутствие Joi.object().xor()