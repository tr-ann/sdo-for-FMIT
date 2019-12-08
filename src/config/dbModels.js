import users from '../modules/users/models'
import teachers from '../modules/teachers/models'
import students from '../modules/students/models'
import faculties from '../modules/faculties/models'
import papers from '../modules/papers/models'
import lessons from '../modules/lessons/models'

const db = {}

Object.assign(db, users, teachers, students, faculties, papers, lessons)

Object.keys(db).forEach(modelName => {
    db[modelName].associate && db[modelName].associate(db)
})

export default db