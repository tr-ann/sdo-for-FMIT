const facultiesRouters = require('../microservice/faculties/routers')
const lessonsRouters = require('../microservice/lessons/routers')
const papersRouters = require('../microservice/papers/routers')
const usersRouters = require('../microservice/users/routers')

module.exports = (app) => {
  app.use('/users', usersRouters.userRouter);
  app.use('/teachers', usersRouters.teacherRouter);
  app.use('/students', usersRouters.studentRouter);

  app.use('/faculties', facultiesRouters.facultyRouter);
  app.use('/departments', facultiesRouters.departmentRouter);
  app.use('/groups', facultiesRouters.groupRouter);
  app.use('/specialities', facultiesRouters.specialityRouter);

}