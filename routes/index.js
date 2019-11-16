const facultiesRouters = require('../microservice/faculties/routers')
const lessonsRouters = require('../microservice/lessons/routers')
const papersRouters = require('../microservice/papers/routers')
const usersRouters = require('../microservice/users/routers')

module.exports = (app) => {
  app.use('/', usersRouters.userRouter);
  app.use('/', usersRouters.teacherRouter);
  app.use('/', usersRouters.studentRouter);

  app.use('/', facultiesRouters.facultyRouter);
  app.use('/', facultiesRouters.departmentRouter);
  app.use('/', facultiesRouters.groupRouter);
  app.use('/', facultiesRouters.specialityRouter);

}