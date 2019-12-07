import db from '../../../config/dbModels'

class OrganizationRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} organization - body of organization that will be created
     * @return {Promise} promise with result of create
     */
    async create(organization) {
        return await db.organization.create(organization)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of organization that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.organization.findByPk(id)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.organization.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of organization that will be updated
     * @param {Object} organization - body of organization that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, organization) {
        return await db.organization.update(organization, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of organization that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.organization.destroy({
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
        return await db.lesson_type.findAll(options)
    }
}

export default new OrganizationRepository()