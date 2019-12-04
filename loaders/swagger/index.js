import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import lessonsDocument from './../../microservices/lessons/swagger'
// import papersRouters from './../../microservices/papers/routers'

const env = process.env.NODE_ENV || 'dev'

const options = {
    explorer: true
}

export default (app) => {

    if (env == 'dev') {

        // app.use('/api-docs', swaggerUi.serve)
        app.use('/api-docs/lessons/building', swaggerUi.serve, swaggerUi.setup(lessonsDocument.building, options))
        app.use('/api-docs/lessons/discipline', swaggerUi.serve, swaggerUi.setup(lessonsDocument.discipline, options))
        app.use('/api-docs/lessons/lectureRoom', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lectureRoom, options))
        app.use('/api-docs/lessons/lesson', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lesson, options))
        app.use('/api-docs/lessons/lessonNumber', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lessonNumber, options))
        app.use('/api-docs/lessons/lessonType', swaggerUi.serve, swaggerUi.setup(lessonsDocument.lessonType, options))
        app.use('/api-docs/lessons/roomType', swaggerUi.serve, swaggerUi.setup(lessonsDocument.roomType, options))
    }
}