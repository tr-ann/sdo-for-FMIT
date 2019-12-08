import db from '../../../config/dbModels'

class UserRepository {
    
    async readAll() {
        return await db.user.findAll({
            attributes: ['id', 'login'],
            include: [
                { 
                    model: db.user_info,
                    attributes: [ 'full_name']
                },
                {
                    model: db.role,
                    attributes: [ 'name' ]
                }
            ]
        })
    }

    async readById(id) {
        return await db.user.findByPk(id, {
            attributes: ['id', 'login'],
            /*include: [    ?? 
                { 
                    model: db.model_info,
                    attributes: [ 'id', 'full_name', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
                },
                {
                    model: db.role,
                    attributes: [ 'id' ]
                },
                {
                    model: db.phone,
                    attributes: [ 'id', 'phone' ],
                }
            ]*/
        })
    }

    async get(options) {
        return await db.user.findOne({ where: options });
    }

    async create(user) {
        return await db.user.create(user)
    }

    async create(user, option) {
        return await db.user.create(user, option)
    }

    async update(id, user) {
        return await db.user.update(user, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.user.destroy({where: {id: id}})
    }
}

export default new UserRepository()