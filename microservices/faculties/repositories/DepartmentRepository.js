import db from '../../../config/dbModels'

class DepartmentRepository {
    
    async readAll() {
        return await db.department.findAll()
    }

    async readById(id) {
        return await db.department.findByPk(id)
    }

    async create(department) {
        return await db.department.create(department)
    }

    async update(id, department) {
        return await db.department.update(department, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.department.destroy({where: {id: id}})
    }
}

export default new DepartmentRepository()