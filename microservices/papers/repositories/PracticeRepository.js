import db from '../models'

export default class PracticeRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} practice - body of practice that will be created
     * @return {Promise} promise with result of create
     */
    async create(practice) {
        return await db.practice.create(practice)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of practice that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.practice.findByPk(id, {
            include: [
                { model: db.student, as: 'student' },
                { model: db.organization, as: 'organization' },
                { model: db.status, as: 'status' },
                { model: db.resource, as: 'resource' },
            ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.practice.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of practice that will be updated
     * @param {Object} practice - body of practice that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, practice) {
        return await db.practice.update(practice, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of practice that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.practice.destroy({
            where: { id: id }
        })
    }
}
