import db from '../../../config/dbModels'

class UserRoleRepository {

    async create(user_role) {
        return await db.user_role.create(user_role)
    }

    async readAll() {
        return await db.user_role.findAll()
    }

    async readById(id) {
        return await db.user_role.findByPk(id)
    }

    async update(id, user_role) {
        return await db.user_role.update(user_role, {where: {id: id}})
    }

    async get(options) {
        return await db.user_role.findAll(options)
    }

    async destroy(id) {
        return await db.user_role.destroy({where: {id: id}})
    }
}

export default new UserRoleRepository()