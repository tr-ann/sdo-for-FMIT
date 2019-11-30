//import { sequelize, connect } from './sequelize'
import users from '../microservices/users/models'
import teachers from '../microservices/teachers/models'
import students from '../microservices/students/models'
import faculties from '../microservices/faculties/models'
import papers from '../microservices/papers/models'
import lessons from '../microservices/lessons/models'

export default db = {}

Object.assign(db, users, teachers, students, faculties, papers, lessons)

Object.keys(db).forEach(modelName => {
    db[modelName].associate && db[modelName].associate(db)
})