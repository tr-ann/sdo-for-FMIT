import db from '../../../config/dbModels'

class SpecialtyRepository {
    
    async readAll() {
        return await db.specialty.findAll()
    }

    async readById(id) {
        return await db.specialty.findByPk(id)
    }

    async create(specialty) {
        return await db.specialty.create(specialty)
    }

    async update(id, specialty) {
        return await db.specialty.update(specialty, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.specialty.destroy({where: {id: id}})
    }
}

export default new SpecialtyRepository()