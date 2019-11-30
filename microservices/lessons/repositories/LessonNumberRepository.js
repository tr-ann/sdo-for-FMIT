import db from '../../../config/dbModels'

class LessonNumberRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} lessonNumber - body of lesson number that will be created
     * @return {Promise} promise with result of create
     */
    async create(lessonNumber) {
        return await db.lesson_number.create(lessonNumber)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of lesson number that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.lesson_number.findByPk(id)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.lesson_number.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of lesson number that will be updated
     * @param {Object} lessonNumber - body of lesson number that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, lessonNumber) {
        return await db.lesson_number.update(lessonNumber, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of lesson number that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.lesson_number.destroy({
            where: { id: id }
        })
    }
}

export default new LessonNumberRepository()