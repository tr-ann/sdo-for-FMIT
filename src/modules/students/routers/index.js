const StudentRouter = require('./StudentRouter');

module.exports = (app) => {
  app.use(StudentRouter);
}