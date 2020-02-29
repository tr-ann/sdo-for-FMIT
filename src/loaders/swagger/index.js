const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const lessonsDocument = require('./../../modules/lessons/swagger');
const facultiesDocument = require('./../../modules/faculties/swagger');
const papersDocument = require('./../../modules/papers/swagger');
const usersDoc = require('../../modules/users/swagger/user.json');

// const papersRouters = require('./../../modules/papers/routers');

const env = process.env.NODE_ENV || 'dev';

const options = {
  explorer: true,
};

module.exports = (app) => {

  if (env == 'dev') {

    // app.use('/api-docs', swaggerUi.serve);
    // app.use('/api-docs/lessons/building', swaggerUi.serve, swaggerUi.setup(lessonsDocument.building, options));
    // app.use('/api-docs/lessons/discipline', swaggerUi.serve, swaggerUi.setup(lessonsDocument.discipline, options));
    app.use('/api-docs/lessons/lectureRoom', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lectureRoom, options));
    // app.use('/api-docs/lessons/lesson', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lesson, options));
    // app.use('/api-docs/lessons/lessonNumber', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lessonNumber, options));
    // app.use('/api-docs/lessons/lessonType', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lessonType, options));
    // app.use('/api-docs/lessons/roomType', swaggerUi.serve, swaggerUi.setup(lessonsDocument.roomType, options));
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(usersDoc, options));
    // app.use('/api-docs/faculties/department', swaggerUi.serve, swaggerUi.setup(facultiesDocument.department, options));
    // app.use('/api-docs/faculties/faculty', swaggerUi.serve, swaggerUi.setup(facultiesDocument.faculty, options));
    // app.use('/api-docs/faculties/group', swaggerUi.serve, swaggerUi.setup(facultiesDocument.group, options));
    // app.use('/api-docs/faculties/infoFaculty', swaggerUi.serve, swaggerUi.setup(facultiesDocument.infoFaculty, options));
    // app.use('/api-docs/faculties/specialty', swaggerUi.serve, swaggerUi.setup(facultiesDocument.specialty, options));
    // app.use('/api-docs/faculties/studyMode', swaggerUi.serve, swaggerUi.setup(facultiesDocument.studyMode, options));
    // app.use('/api-docs/faculties/subgroup', swaggerUi.serve, swaggerUi.setup(facultiesDocument.subgroup, options));
    // app.use('/api-docs/papers/resource', swaggerUi.serve, swaggerUi.setup(papersDocument.resource, options));
      
  }
}