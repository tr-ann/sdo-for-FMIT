const facultiesRouters = require('../microservices/faculties/routers')
import lessonsRouters from '../microservices/lessons/routers'
import papersRouters from '../microservices/papers/routers'
const usersRouters = require('../microservices/users/routers')

export default (app) => {

  app.use('/users', usersRouters.userRouter);
  app.use('/teachers', usersRouters.teacherRouter);
  app.use('/students', usersRouters.studentRouter);

  app.use('/buildings', lessonsRouters.buildingsRouter);
  app.use('/disciplines', lessonsRouters.disciplinesRouter);
  app.use('/lectureRooms', lessonsRouters.lectureRoomsRouter);
  app.use('/lessonNumbers', lessonsRouters.lessonNumbersRouter);
  app.use('/lessonTypes', lessonsRouters.lessonTypesRouter);
  app.use('/lessons', lessonsRouters.lessonsRouter);
  app.use('/roomTypes', lessonsRouters.roomTypesRouter);

  app.use('/faculties', facultiesRouters.facultyRouter);
  app.use('/departments', facultiesRouters.departmentRouter);
  app.use('/groups', facultiesRouters.groupRouter);
  app.use('/specialities', facultiesRouters.specialityRouter);

}