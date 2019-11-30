import db from '../../../config/dbModels'

class FacultyRepository {
    
    async readAll() {
        return await db.faculty.findAll()
    }

    async readById(id) {
        return await db.faculty.findByPk(id)
    }

    async create(faculty) {
        return await db.faculty.create(faculty)
    }

    async update(id, faculty) {
        return await db.faculty.update(faculty, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.faculty.destroy({where: {id: id}})
    }
}

export default new FacultyRepository()