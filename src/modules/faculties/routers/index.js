const departmentRouter = require('./departmentRouter');
const facultyRouter = require('./facultyRouter');
const groupRouter = require('./groupRouter');
const infoFacultyRouter = require('./infoFacultyRouter');
const specialtyRouter = require('./specialtyRouter');
const studyModeRouter = require('./studyModeRouter');


module.exports = (app) => {
  app.use(departmentRouter);
  app.use(facultyRouter);
  app.use(groupRouter);
  app.use(infoFacultyRouter);
  app.use(specialtyRouter);
  app.use(studyModeRouter);
}