import db from '../../../config/dbModels'

class InfoFacultyRepository {
    
    async readAll() {
        return await db.infoFaculty.findAll()
    }

    async readById(id) {
        return await db.infoFaculty.findByPk(id)
    }

    async create(infoFaculty) {
        return await db.infoFaculty.create(infoFaculty)
    }

    async update(id, infoFaculty) {
        return await db.infoFaculty.update(infoFaculty, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.infoFaculty.destroy({where: {id: id}})
    }
}

export default new InfoFacultyRepository()