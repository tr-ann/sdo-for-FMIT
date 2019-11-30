import db from '../models'

export default class RequestRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} request - body of request that will be created
     * @return {Promise} promise with result of create
     */
    async create(request) {
        return await db.request.create(request)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of request that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.request.findByPk(id, {
            include: [
                { model: db.student, as: 'student' },
                { model: db.teacher, as: 'teacher' },
                { model: db.status, as: 'status' },
            ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.request.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of request that will be updated
     * @param {Object} request - body of request that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, request) {
        return await db.request.update(request, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of request that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.request.destroy({
            where: { id: id }
        })
    }
}