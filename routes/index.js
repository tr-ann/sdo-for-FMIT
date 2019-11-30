const facultiesRouters = require('../microservices/faculties/routers')
import lessonsRouters from '../microservices/lessons/routers'
import papersRouters from '../microservices/papers/routers'
const usersRouters = require('../microservices/students/routers')

import { userRouter, teacherRouter, studentRouter } from '../microservices/students/routers'

import { isValidUser } from '../middleware/validation/userValidation'
import { isAuthenticated, passport } from '../loaders/passport'

export default (app) => {

    router.get('/login', isAuthenticated)

    router.post('/login', isValidUser, 
        passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/login',
        })
    )

    app.use('/users', passport.authenticate('local', {
        failureRedirect: '/login',
    }), userRouter);


    app.use('/teachers', teacherRouter);
    app.use('/students', studentRouter);
    app.use('/teachers', usersRouters.teacherRouter);

    app.use('/buildings', lessonsRouters.buildingRouter)
    app.use('/disciplines', lessonsRouters.disciplineRouter)
    app.use('/lectureRooms', lessonsRouters.lectureRoomRouter)
    app.use('/lessonNumbers', lessonsRouters.lessonNumberRouter)
    app.use('/lessonTypes', lessonsRouters.lessonTypeRouter)
    app.use('/lessons', lessonsRouters.lessonRouter)
    app.use('/roomTypes', lessonsRouters.roomTypeRouter)

    app.use('/graduationPapers', papersRouters.graduationPaperRouter)
    app.use('/organizations', papersRouters.organizationRouter)
    app.use('/practices', papersRouters.practiceRouter)
    app.use('/practiceTypes', papersRouters.practiceTypeRouter)
    app.use('/requests', papersRouters.requestRouter)
    app.use('/statuses', papersRouters.statusRouter)
    app.use('/termPapers', papersRouters.termPaperRouter)
}