import lessonsRouters from '../modules/lessons/routers'
import papersRouters from '../modules/papers/routers'
import usersRouters from '../modules/users/routers'
import teachersRouters from '../modules/teachers/routers'
import studentsRouters from '../modules/students/routers'
import facultiesRouters from '../modules/faculties/routers'

import { passport, login, logout, isAutenticated } from './passport'

export default (app) => {

    app.get('/login', (req, res, next) => {
        req.isAutenticated()
            ? res.redirect('/')
            : next() //render('')
    })

    app.post('/login', login
        /*{
             successRedirect: '/home',
             failureRedirect: '/login',
         })*/
    )

    app.get('/logout', logout)

    app.use('/users', usersRouters.UserRouter)

    
    app.use('/phones', isAutenticated, usersRouters.PhoneRouter)
    app.use('/roles', usersRouters.RoleRouter)
    app.use('/urls', isAutenticated, usersRouters.UrlRouter)
    
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

    app.use('/graduationPapers', isAutenticated, papersRouters.graduationPaperRouter)
    app.use('/organizations', isAutenticated, papersRouters.organizationRouter)
    app.use('/practices', isAutenticated, papersRouters.practiceRouter)
    app.use('/practiceTypes', isAutenticated, papersRouters.practiceTypeRouter)
    app.use('/requests', isAutenticated, papersRouters.requestRouter)
    app.use('/resources', isAutenticated, papersRouters.resourceRouter)
    app.use('/statuses', isAutenticated, papersRouters.statusRouter)
    app.use('/termPapers', isAutenticated, papersRouters.termPaperRouter)

    app.use('/departments', isAutenticated, facultiesRouters.departmentRouter)
    app.use('/faculties', isAutenticated, facultiesRouters.facultyRouter)
    app.use('/groups', isAutenticated, facultiesRouters.groupRouter)
    app.use('/infoFaculties', isAutenticated, facultiesRouters.infoFacultyRouter)
    app.use('/specialties', isAutenticated, facultiesRouters.specialtyRouter)
    app.use('/studyModes', isAutenticated, facultiesRouters.studyModeRouter)
    app.use('/subgroups', isAutenticated, facultiesRouters.subgroupRouter)
}