module.exports.id = require('./id');
module.exports.pagination = require('./pagination');
module.exports.lessons = require('./lessons');
module.exports.faculties = require('./faculties');
module.exports.papers = require('./papers');

// Уточнить, что делать с проблемой схем:
// - отсутствие Joi.object().with()
// - отсутствие Joi.object().xor()