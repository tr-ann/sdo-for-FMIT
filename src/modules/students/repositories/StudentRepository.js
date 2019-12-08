import db from '../../../config/dbModels'

class StudentRepository {
    
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
   
    async destroy(id) {
        return await db.student.destroy({where: {id: id}})
    }
}

export default new StudentRepository()