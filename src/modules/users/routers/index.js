const userRouter = require('./UserRouter');
const roleRouter = require('./RoleRouter');
const controlPointRouter = require('./ControlPointRouter');

module.exports = (app) => {
  app.use('/users', userRouter);
  app.use('/roles', roleRouter);
  app.use('/control-points', controlPointRouter);
}