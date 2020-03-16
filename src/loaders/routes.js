const lessonsRouters = require('../modules/lessons/routers');
const papersRouters = require('../modules/papers/routers');
const usersRouters = require('../modules/users/routers');
const teachersRouters = require('../modules/teachers/routers');
const studentsRouters = require('../modules/students/routers');
const facultiesRouters = require('../modules/faculties/routers');
const AuthController = require('../modules/auth/AuthController');
const { tryCatch } = require('../helpers');
const { isAuthenticated } = require('../passport');
const hasAccess = require('../middleware/hasAccess');

module.exports = (app) => {

  app.post('/login', tryCatch(AuthController.login));
  app.use(tryCatch(isAuthenticated));
  
  app.get('/logout', tryCatch(AuthController.logout));
  
  app.use(tryCatch(hasAccess));

  app.use('/users', usersRouters.UserRouter);
  app.use('/roles', usersRouters.RoleRouter);
  app.use('/urls', usersRouters.UrlRouter);
  
  app.use('/teachers', teachersRouters.TeacherRouter);
  app.use('/academicDegrees', teachersRouters.AcademicDegreeRouter);
  app.use('/academicRanks', teachersRouters.AcademicRankRouter);
  app.use('/positions', teachersRouters.PositionRouter);

  app.use('/students', studentsRouters.StudentRouter);

  app.use('/buildings', lessonsRouters.buildingRouter);
  app.use('/disciplines', lessonsRouters.disciplineRouter);
  app.use('/lectureRooms', lessonsRouters.lectureRoomRouter);
  app.use('/lessonNumbers', lessonsRouters.lessonNumberRouter);
  app.use('/lessonTypes', lessonsRouters.lessonTypeRouter);
  app.use('/lessons', lessonsRouters.lessonRouter);
  app.use('/roomTypes', lessonsRouters.roomTypeRouter);

  app.use('/graduationPapers', papersRouters.graduationPaperRouter);
  app.use('/organizations', papersRouters.organizationRouter);
  app.use('/practices', papersRouters.practiceRouter);
  app.use('/practiceTypes', papersRouters.practiceTypeRouter);
  app.use('/requests', papersRouters.requestRouter);
  app.use('/resources', papersRouters.resourceRouter);
  app.use('/statuses', papersRouters.statusRouter);
  app.use('/termPapers', papersRouters.termPaperRouter);

  app.use('/departments', facultiesRouters.departmentRouter);
  app.use('/faculties', facultiesRouters.facultyRouter);
  app.use('/groups', facultiesRouters.groupRouter);
  app.use('/specialties', facultiesRouters.specialtyRouter);
  app.use('/studyModes', facultiesRouters.studyModeRouter);
  app.use('/subgroups', facultiesRouters.subgroupRouter);
};