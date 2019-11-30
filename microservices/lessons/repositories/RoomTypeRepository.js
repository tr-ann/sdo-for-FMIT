import db from '../../../config/dbModels'

class RoomTypeRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} roomType - body of room type that will be created
     * @return {Promise} promise with result of create
     */
    async create(roomType) {
        return await db.room_type.create(roomType)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of room type that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.room_type.findByPk(id)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.room_type.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of room type that will be updated
     * @param {Object} roomType - body of room type that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, roomType) {
        return await db.room_type.update(roomType, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of room type that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.room_type.destroy({
            where: { id: id }
        })
    }
}

export default new RoomTypeRepository()