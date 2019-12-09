import db from '../../../classes/dbModels'

class PracticeRepository {

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
            attributes: [
                'id',
                'topic',
                'name',
                'create_date',
                'update_date',
                'description',
                'student_id',
                'organization_id',
                'status_id',
                'practice_type_id',
                'resource_id',
            ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.practice.findAll({
            attributes: [
                'id',
                'topic',
                'name',
                'description',
            ],
            include: [
                {
                    model: db.student,
                    as: 'student',
                    attributes: [ 'id', 'short_name' ],
                },
                {
                    model: db.organization,
                    as: 'organization',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.status,
                    as: 'status',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.practice_type,
                    as: 'practice_type',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.resource,
                    as: 'resource',
                    attributes: [ 'id' ],
                },
            ],
        })
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

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.practice.findAll(options)
    }
}

export default new PracticeRepository()