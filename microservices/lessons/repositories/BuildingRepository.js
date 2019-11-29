import db from '../models'

export default class BuildingRepository {

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
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of building that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.building.findByPk(id)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.building.findAll()
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
            where: { id: id }
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
            where: { id: id }
        })
    }
}