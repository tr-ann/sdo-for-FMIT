const userRouter = require('./UserRouter');
const roleRouter = require('./RoleRouter');
const controlPointRouter = require('./ControlPointRouter');

module.exports = (app) => {
  app.use(userRouter);
  app.use(roleRouter);
  app.use(controlPointRouter);
}