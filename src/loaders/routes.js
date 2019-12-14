import lessonsRouters from '../modules/lessons/routers'
import papersRouters from '../modules/papers/routers'
import usersRouters from '../modules/users/routers'
import teachersRouters from '../modules/teachers/routers'
import studentsRouters from '../modules/students/routers'
import facultiesRouters from '../modules/faculties/routers'
import UserController from '../modules/users/controllers/UserController'

import { passport, login, logout, isAuthenticated } from './passport'
import filter from './filter'

export default (app) => {

    app.get('/signup', function(req, res, next) {
        res.render('signup')
    })

    app.post('/signup', UserController.create)

    app.get('/login', isUnauthorized, function(req, res, next) {
        res.render('login', {message: req.query.message})
    })

    app.post('/login', isUnauthorized, login)

    app.use(isAuthenticated)

    app.get('/logout', logout)

    app.use(filter)
    
    app.use('/users', usersRouters.UserRouter)
    
    app.use('/phones', usersRouters.PhoneRouter)
    app.use('/roles', usersRouters.RoleRouter)
    app.use('/urls', usersRouters.UrlRouter)
    
    app.use('/teachers', teachersRouters.TeacherRouter)
    app.use('/academicDegrees', teachersRouters.AcademicDegreeRouter)
    app.use('/academicRanks', teachersRouters.AcademicRankRouter)
    app.use('/positions', teachersRouters.PositionRouter)

    app.use('/students', studentsRouters.StudentRouter)

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
    app.use('/resources', papersRouters.resourceRouter)
    app.use('/statuses', papersRouters.statusRouter)
    app.use('/termPapers', papersRouters.termPaperRouter)

    app.use('/departments', facultiesRouters.departmentRouter)
    app.use('/faculties', facultiesRouters.facultyRouter)
    app.use('/groups', facultiesRouters.groupRouter)
    app.use('/specialties', facultiesRouters.specialtyRouter)
    app.use('/studyModes', facultiesRouters.studyModeRouter)
    app.use('/subgroups', facultiesRouters.subgroupRouter)
}