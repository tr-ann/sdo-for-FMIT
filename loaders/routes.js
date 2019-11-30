import lessonsRouters from '../microservices/lessons/routers'
import papersRouters from '../microservices/papers/routers'
import usersRouters from '../microservices/users/routers'
import teachersRouters from '../microservices/teachers/routers'
import studentsRouters from '../microservices/students/routers'

import { passport, isAutenticated } from '../passport'

export default (app) => {

    //app.get('/login', isAuthenticated)

    app.post('/login', 
        passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/login',
        })
    )

    //console.log('routes')
    app.use('/users', isAutenticated, usersRouters.UserRouter)
    app.use('/teachers', isAutenticated, teachersRouters.TeacherRouter)
    app.use('/students', isAutenticated, studentsRouters.StudentRouter)

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