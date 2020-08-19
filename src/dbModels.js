const users = require('./modules/users/models');
const students = require('./modules/students/models');
const faculties = require('./modules/faculties/models');
const countries = require('./modules/countries/models');

const db = {};

Object.assign(db, users, students, faculties, countries);

Object.keys(db).forEach(modelName => {
    db[modelName].associate && db[modelName].associate(db);
});

module.exports = db;