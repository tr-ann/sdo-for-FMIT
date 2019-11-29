import db from '../models'

export default class User {
    
    async readAll() {
        return await db.user.findAll()
    }

    async readById(id) {
        return await db.user.findByPk(id)
    }

    async create(user) {
        return await db.user.create(user)
    }

    async update(id, user) {
        return await db.user.update(user, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.user.destroy({where: {id: id}})
    }
}