import db from '../../../config/dbModels'

class StudyModeRepository {
    
    async readAll() {
        return await db.studyMode.findAll()
    }

    async readById(id) {
        return await db.studyMode.findByPk(id)
    }

    async create(studyMode) {
        return await db.studyMode.create(studyMode)
    }

    async update(id, studyMode) {
        return await db.studyMode.update(studyMode, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.studyMode.destroy({where: {id: id}})
    }
}

export default new StudyModeRepository()