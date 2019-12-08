import db from '../../../config/dbModels'

class InfoFacultyRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.infoFaculty.findAll( {
            attributes: ["id", "description","phone_number",'deleted_date'],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of faculty info that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.infoFaculty.findByPk(id, {
            attributes: [
                "id",
                "description",
                "phone_number",
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} infoFaculty - body of faculty info that will be created
     * @return {Promise} promise with result of create
     */
    async create(infoFaculty) {
        return await db.infoFaculty.create(infoFaculty)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of faculty info that will be updated
     * @param {Object} infoFaculty - body of faculty info that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, infoFaculty) {
        return await db.infoFaculty.update(infoFaculty, {where: {id: id}})
    }
   
    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of faculty info that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.infoFaculty.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.infoFaculty.findAll(options)
    }
}

export default new InfoFacultyRepository()