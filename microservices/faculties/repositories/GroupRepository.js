import db from '../../../config/dbModels'

class GroupRepository {
    
    async readAll() {
        return await db.group.findAll()
    }

    async readById(id) {
        return await db.group.findByPk(id)
    }

    async create(group) {
        return await db.group.create(group)
    }

    async update(id, group) {
        return await db.group.update(group, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.group.destroy({where: {id: id}})
    }
}

export default new GroupRepository()