import lessonsRouters from '../microservices/lessons/routers'
import papersRouters from '../microservices/papers/routers'
import usersRouters from '../microservices/users/routers'
import teachersRouters from '../microservices/teachers/routers'
import studentsRouters from '../microservices/students/routers'

import { passport, isAutenticated } from '../passport'

export default (app) => {

    app.get('/login', (req, res, next) => {
        req.isAutenticated()
            ? res.redirect('/')
            : next() //render('')
    })

    app.post('/login', 
        passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/login',
        })
    )

    //console.log('routes')
    app.use('/users', usersRouters.UserRouter)
    app.use('/phones', isAutenticated, usersRouters.PhoneRouter)
    app.use('/roles', usersRouters.RoleRouter)
    //app.use('/usersInfo', isAutenticated, usersRouters.UserInfoRouter)  ????????
    
    app.use('/teachers', isAutenticated, teachersRouters.TeacherRouter)
    app.use('/academicDegrees', isAutenticated, teachersRouters.AcademicDegreeRouter)
    app.use('/academicRanks', isAutenticated, teachersRouters.AcademicRankRouter)
    app.use('/positions', isAutenticated, teachersRouters.PositionRouter)

    app.use('/students', isAutenticated, studentsRouters.StudentRouter)

    app.use('/buildings', isAutenticated, lessonsRouters.buildingRouter)
    app.use('/disciplines', isAutenticated, lessonsRouters.disciplineRouter)
    app.use('/lectureRooms', isAutenticated, lessonsRouters.lectureRoomRouter)
    app.use('/lessonNumbers', isAutenticated, lessonsRouters.lessonNumberRouter)
    app.use('/lessonTypes', isAutenticated, lessonsRouters.lessonTypeRouter)
    app.use('/lessons', isAutenticated, lessonsRouters.lessonRouter)
    app.use('/roomTypes', isAutenticated, lessonsRouters.roomTypeRouter)

    app.use('/graduationPapers', papersRouters.graduationPaperRouter)
    app.use('/organizations', papersRouters.organizationRouter)
    app.use('/practices', papersRouters.practiceRouter)
    app.use('/practiceTypes', papersRouters.practiceTypeRouter)
    app.use('/requests', papersRouters.requestRouter)
    app.use('/statuses', papersRouters.statusRouter)
    app.use('/termPapers', papersRouters.termPaperRouter)
}