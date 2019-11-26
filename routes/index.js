const facultiesRouters = require('../microservices/faculties/routers')
import lessonsRouters from '../microservices/lessons/routers'
import papersRouters from '../microservices/papers/routers'
const usersRouters = require('../microservices/users/routers')

import { userRouter, teacherRouter, studentRouter } from '../microservices/users/routers'

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

    app.use('/buildings', lessonsRouters.buildingsRouter);
    app.use('/disciplines', lessonsRouters.disciplinesRouter);
    app.use('/lectureRooms', lessonsRouters.lectureRoomsRouter);
    app.use('/lessonNumbers', lessonsRouters.lessonNumbersRouter);
    app.use('/lessonTypes', lessonsRouters.lessonTypesRouter);
    app.use('/lessons', lessonsRouters.lessonsRouter);
    app.use('/roomTypes', lessonsRouters.roomTypesRouter);
}