import db from '../../../config/dbModels'

class ResourceRepository {
    
    async readAll() {
        return await db.resource.findAll()
    }

    async readById(id) {
        return await db.resource.findByPk(id)
    }

    async create(resource) {
        return await db.resource.create(resource)
    }

    async update(id, resource) {
        return await db.resource.update(resource, {where: {id: id}})
    }
   
    async destroy(id) {
        return await db.resource.destroy({where: {id: id}})
    }
}

export default new ResourceRepository()