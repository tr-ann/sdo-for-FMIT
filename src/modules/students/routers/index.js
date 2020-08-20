const StudentRouter = require('./StudentRouter');

module.exports = (app) => {
  app.use('/students', StudentRouter);
}