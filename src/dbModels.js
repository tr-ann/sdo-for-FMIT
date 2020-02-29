const users = require('./modules/users/models');
const teachers = require('./modules/teachers/models');
const students = require('./modules/students/models');
const faculties = require('./modules/faculties/models');
const papers = require('./modules/papers/models');
const lessons = require('./modules/lessons/models');

const db = {};

Object.assign(db, users, teachers, students, faculties, papers, lessons);

Object.keys(db).forEach(modelName => {
    db[modelName].associate && db[modelName].associate(db);
});

module.exports = db;