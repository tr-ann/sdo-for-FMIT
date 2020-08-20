const departmentRouter = require('./departmentRouter');
const facultyRouter = require('./facultyRouter');
const groupRouter = require('./groupRouter');
const specialtyRouter = require('./specialtyRouter');
const studyModeRouter = require('./studyModeRouter');


module.exports = (app) => {
  app.use('/departments', departmentRouter);
  app.use('/faculties', facultyRouter);
  app.use('/groups', groupRouter);
  app.use('/specialties', specialtyRouter);
  app.use('/study-modes', studyModeRouter);
}