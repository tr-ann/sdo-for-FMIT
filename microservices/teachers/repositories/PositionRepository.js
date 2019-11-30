import db from '../models'

export default class PositionRepository {

    async create(position) {
        return await db.position.create(position)
    }

    async readAll() {
        return await db.position.findAll()
    }

    async readById(id) {
        return await db.position.findByPk(id)
    }

    async update(id, position) {
        return await db.position.update(position, {where: {id: id}})
    }

    async destroy(id) {
        return await db.position.destroy({where: {id: id}})
    }

    /*  ????  */
    async getTeachers(id) {
        return await db.position.getTeachers({where: {id: id}})
    }
}