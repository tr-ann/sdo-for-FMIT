import db from '../../../config/dbModels'

class StudentRepository {

    /**
     * Create an entity in a database
     * 
     * @param {Object} student - body of student that will be created
     * @return {Promise} promise with result of create
     */
    async create(student) {
        return await db.student.create(student)
    }

    /**
     * Read an entity from a database
     * 
     * @param {Number} id - id of student that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.student.findByPk(id, {
            attributes: [ 'id', 'full_name' ],
        })
    }

    /**
     * Read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.student.findAll({
            attributes: [ 'id', 'full_name' ],
        })
    }

    /**
     * Update an entity from a database
     * 
     * @param {Number} id - id of student that will be updated
     * @param {Object} student - body of student that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, student) {
        return await db.student.update(student, {where: { id: id }})
    }

    /**
     * Destroy an entity from a database
     * 
     * @param {Number} id - id of student that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.student.destroy({where: { id: id }})
    }

    /**
     * Reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async getAll(options) {
        return await db.student.findAll(options)
    }

    /**
     * Reads entity by description from a database
     * 
     * @param {Object} options - description to read entity
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.student.findOne(options)
    }
}

export default new StudentRepository()