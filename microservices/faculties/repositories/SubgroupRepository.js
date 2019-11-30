import db from '../../../config/dbModels'

class SubgroupRepository {
    
    async readAll() {
        return await db.subgroup.findAll()
    }

    async readById(id) {
        return await db.subgroup.findByPk(id)
    }

    async create(subgroup) {
        return await db.subgroup.create(subgroup)
    }

    async update(id, subgroup) {
        return await db.subgroup.update(subgroup, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.subgroup.destroy({where: {id: id}})
    }
}

export default new SubgroupRepository()