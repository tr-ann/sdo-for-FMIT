import db from '../../../classes/dbModels'

class RoleUrlRepository {

    async create(role_url) {
        return await db.role_url.create(role_url)
    }

    async readAll() {
        return await db.role_url.findAll()
    }

    async readById(id) {
        return await db.role_url.findByPk(id)
    }

    async update(id, role_url) {
        return await db.role_url.update(role_url, {where: {id: id}})
    }

    async get(options) {
        return await db.role_url.findAll(options)
    }

    async destroy(id) {
        return await db.role_url.destroy({where: {id: id}})
    }
}

export default new RoleUrlRepository()