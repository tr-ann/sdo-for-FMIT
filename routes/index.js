import { facultyRouter, departmentRouter, groupRouter, specialityRouter } from '../microservice/faculties/routers'
import lessonsRouters from '../microservice/lessons/routers'
import papersRouters from '../microservice/papers/routers'
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

    app.use('/faculties', facultyRouter);
    app.use('/departments', departmentRouter);
    app.use('/groups', groupRouter);
    app.use('/specialities', specialityRouter);
}