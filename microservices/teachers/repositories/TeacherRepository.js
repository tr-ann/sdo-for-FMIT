import db from '../models'

export default class TeacherRepository {

    async create(teacher) {
        return await db.teacher.create(teacher)
    }

    async readAll() {
        return await db.teacher.findAll()
    }

    async readById(id) {
        return await db.teacher.findByPk(id)
    }

    async update(id, teacher) {
        return await db.teacher.update(teacher, {where: {id: id}})
    }

    async destroy(id) {
        return await db.teacher.destroy({where: {id: id}})
    }

    async getInfo(id) {
        return await db.teacher.findByPk(id, {
            include: [
                { model: db.user },
                { model: db.group },
                { model: db.academic_degree },
                { model: db.academic_rank },
                { model: db.position }
            ]
        })
    }
}