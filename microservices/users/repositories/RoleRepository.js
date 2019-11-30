import db from '../../../config/dbModels'

class RoleRepository {

    async create(role) {
        return await db.role.create(role)
    }

    async readAll() {
        return await db.role.findAll()
    }

    async readById(id) {
        return await db.role.findByPk(id)
    }

    async update(id, role) {
        return await db.role.update(role, {where: {id: id}})
    }

    async destroy(id) {
        return await db.role.destroy({where: {id: id}})
    }

    async getUsers(id) {
        return await db.role.getUsers({where: {id: id}})
    }
}

export default new RoleRepository()