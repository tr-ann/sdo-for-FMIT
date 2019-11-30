import db from '../../../config/dbModels'

class GraduationPaperRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} graduationPaper - body of graduation paper that will be created
     * @return {Promise} promise with result of create
     */
    async create(graduationPaper) {
        return await db.graduation_paper.create(graduationPaper)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of graduation paper that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.graduation_paper.findByPk(id, {
            include: [
                { model: db.student, as: 'student' },
                { model: db.teacher, as: 'teacher' },
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
        return await db.graduation_paper.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of graduation paper that will be updated
     * @param {Object} graduationPaper - body of graduation paper that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, graduationPaper) {
        return await db.graduation_paper.update(graduationPaper, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of graduation paper that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.graduation_paper.destroy({
            where: { id: id }
        })
    }
}

export default new GraduationPaperRepository()