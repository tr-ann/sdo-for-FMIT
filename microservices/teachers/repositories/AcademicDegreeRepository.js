import db from '../../../config/dbModels'

class AcademicDegreeRepository {

    async create(academicDegree) {
        return await db.academic_degree.create(academicDegree)
    }

    async readAll() {
        return await db.academic_degree.findAll()
    }

    async readById(id) {
        return await db.academic_degree.findByPk(id)
    }

    async update(id, academicDegree) {
        return await db.academic_degree.update(academicDegree, {where: {id: id}})
    }

    async destroy(id) {
        return await db.academic_degree.destroy({where: {id: id}})
    }
}

export default new AcademicDegreeRepository()