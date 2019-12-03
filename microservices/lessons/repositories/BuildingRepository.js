import db from '../../../config/dbModels'

class BuildingRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} building - body of building that will be created
     * @return {Promise} promise with result of create
     */
    async create(building) {
        return await db.building.create(building)
    }

    /**
     * This method to read an entity from a database
     * 
     * @param {Number} id - id of building that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.building.findByPk(id, {
            attributes: ['id', 'name'],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.building.findAll({
            attributes: ['id', 'name'],
        })
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of building that will be updated
     * @param {Object} building - body of building that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, building) {
        return await db.building.update(building, {
            where: { id: id },
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of building that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.building.destroy({
            where: { id: id },
        })
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.building.findAll(options)
    }
}

export default new BuildingRepository()