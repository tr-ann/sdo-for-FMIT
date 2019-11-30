import db from '../../../config/dbModels'

class DisciplineRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} discipline - body of discipline that will be created
     * @return {Promise} promise with result of create
     */
    async create(discipline) {
        return await db.discipline.create(discipline)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of discipline that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.discipline.findByPk(id)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.discipline.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of discipline that will be updated
     * @param {Object} discipline - body of discipline that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, discipline) {
        return await db.discipline.update(discipline, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of discipline that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.discipline.destroy({
            where: { id: id }
        })
    }
}

export default new DisciplineRepository()