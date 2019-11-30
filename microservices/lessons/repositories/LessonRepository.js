import db from '../../../config/dbModels'

class LessonRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} lesson - body of lesson that will be created
     * @return {Promise} promise with result of create
     */
    async create(lesson) {
        return await db.lesson.create(lesson)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of lesson that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.lesson.findByPk(id, {
            include: [
                { model: db.group, as: 'group' },
                { model: db.subgroup, as: 'subgroup' },
                { model: db.teacher, as: 'teacher' },
                { model: db.lesson_type, as: 'lessonType' },
                { model: db.lecture_room, as: 'lectureRoom' },
                { model: db.discipline, as: 'discipline' },
                { model: db.lesson_number, as: 'lessonNumber' },
            ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.lesson.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of lesson that will be updated
     * @param {Object} lesson - body of lesson that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, lesson) {
        return await db.lesson.update(lesson, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of lesson that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.lesson.destroy({
            where: { id: id }
        })
    }
}

export default new LessonRepository()