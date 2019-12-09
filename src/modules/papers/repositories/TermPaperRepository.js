import db from '../../../config/dbModels'

class TermPaperRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} termPaper - body of term paper that will be created
     * @return {Promise} promise with result of create
     */
    async create(termPaper) {
        return await db.term_paper.create(termPaper)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of term paper that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.term_paper.findByPk(id, {
            attributes: [
                'id',
                'topic',
                'name',
                'description',
                'student_id',
                'teacher_id',
                'status_id',
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
        return await db.term_paper.findAll({
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
                    model: db.teacher,
                    as: 'teacher',
                    attributes: [ 'id', 'short_name' ],
                },
                {
                    model: db.status,
                    as: 'status',
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
     * @param {Number} id - id of term paper that will be updated
     * @param {Object} termPaper - body of term paper that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, termPaper) {
        return await db.term_paper.update(termPaper, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of term paper that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.term_paper.destroy({
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
        return await db.term_paper.findAll(options)
    }
}

export default new TermPaperRepository()