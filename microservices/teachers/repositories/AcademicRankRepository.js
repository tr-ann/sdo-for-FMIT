import db from '../models'

export default class AcademicRankRepository {

    async create(academicRank) {
        return await db.academic_rank.create(academicRank)
    }

    async readAll() {
        return await db.academic_rank.findAll()
    }

    async readById(id) {
        return await db.academic_rank.findByPk(id)
    }

    async update(id, academicRank) {
        return await db.academic_rank.update(academicRank, {where: {id: id}})
    }

    async destroy(id) {
        return await db.academic_rank.destroy({where: {id: id}})
    }
}