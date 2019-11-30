import db from '../../../config/dbModels'

class LessonTypeRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} lessonType - body of lesson type that will be created
     * @return {Promise} promise with result of create
     */
    async create(lessonType) {
        return await db.lesson_type.create(lessonType)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of lesson type that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {        
        return await db.lesson_type.findByPk(id)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.lesson_type.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of lesson type that will be updated
     * @param {Object} lessonType - body of lesson type that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, lessonType) {
        return await db.lesson_type.update(lessonType, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of lesson type that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.lesson_type.destroy({
            where: { id: id }
        })
    }
}

export default new LessonTypeRepository()