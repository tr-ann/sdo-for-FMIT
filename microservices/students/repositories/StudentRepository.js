import db from '../models'

export default class Student {
    
    async readAll() {
        return await db.student.findAll()
    }

    async readById(id) {
        return await db.student.findByPk(id)
    }

    async create(object) {
        return await db.student.create(object)
    }

    async update(id, object) {
        return await db.student.update(object, {where: {id: id}})
    }
   
    async destroy(student) {
        return await student.destroy()
    }
}