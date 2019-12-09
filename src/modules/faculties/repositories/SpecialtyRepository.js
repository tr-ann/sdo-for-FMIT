import db from '../../../config/dbModels'

class SpecialtyRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.specialty.findAll({
            attributes: [ "id","code","name","short_name"],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of specialty that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.specialty.findByPk(id, {
            attributes: [
                "id",
                "code",
                "name",
                "short_name",
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} specialty - body of specialty that will be created
     * @return {Promise} promise with result of create
     */
    async create(specialty) {
        return await db.specialty.create(specialty)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of specialty that will be updated
     * @param {Object} specialty - body of specialty that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, specialty) {
        return await db.specialty.update(specialty, {where: {id: id}})
    }
   
    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of specialty that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.specialty.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.specialty.findAll(options)
    }
}

export default new SpecialtyRepository()