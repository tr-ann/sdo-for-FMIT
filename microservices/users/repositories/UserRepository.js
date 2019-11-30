import db from '../models'

class UserRepository {
    
    async readAll() {
        return await db.user.findAll()
    }

    async readById(id) {
        return await db.user.findByPk(id, {
            attributes: ['id', 'login'],
            include: [   /* ?? */
                { model: db.model_info }
            ]
        })
    }

    async get(options) {
        return await db.user.findOne({ where: options });
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

export default new UserRepository()