import db from '../../../classes/dbModels'

class ResourceRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.resource.findAll({
            attributes: [ 'id', 'description'],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of resource that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.resource.findByPk(id, {
            attributes: [
                'id',
                'description',
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} resource - body of resource that will be created
     * @return {Promise} promise with result of create
     */
    async create(resource) {
        return await db.resource.create(resource)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of resource that will be updated
     * @param {Object} resource - body of resource that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, resource) {
        return await db.resource.update(resource, {where: {id: id}})
    }
    
     /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of resource that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.resource.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.resource.findAll(options)
    }
}

export default new ResourceRepository()