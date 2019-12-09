import db from '../../../config/dbModels'

class StatusRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} status - body of status that will be created
     * @return {Promise} promise with result of create
     */
    async create(status) {
        return await db.status.create(status)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of status that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.status.findByPk(id, {
            attributes: [ 'id', 'name' ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.status.findAll({
            attributes: [ 'id', 'name' ],
        })
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of status that will be updated
     * @param {Object} status - body of status that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, status) {
        return await db.status.update(status, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of status that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.status.destroy({
            where: { id: id }
        })
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.status.findAll(options)
    }
}

export default new StatusRepository()