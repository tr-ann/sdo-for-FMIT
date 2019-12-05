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
            attributes: [
                'id',
                'week_day',
                'group_id',
                'subgroup_id',
                'teacher_id',
                'lesson_type_id',
                'lecture_room_id',
                'discipline_id',
                'lesson_number_id',
            ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.lesson.findAll({
            attributes: [ 'id', 'week_day', 'deleted_date' ],
            include: [
                {
                    model: db.group,
                    as: 'group',
                    attributes: [ 'number' ],
                },
                {
                    model: db.subgroup,
                    as: 'subgroup',
                    attributes: [ 'name' ],
                },
                {
                    model: db.teacher,
                    as: 'teacher',
                    attributes: [ 'short_name' ],
                },
                {
                    model: db.lesson_type,
                    as: 'lessonType',
                    attributes: [ 'name' ],
                },
                {
                    model: db.lecture_room,
                    as: 'room',
                    attributes: [ 'number' ],
                },
                {
                    model: db.discipline,
                    as: 'discipline',
                    attributes: [ 'short_name' ],
                },
                {
                    model: db.lesson_number,
                    as: 'lessonNumber',
                    attributes: [ 'number' ],
                },
            ],
        })
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

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.lesson.findAll(options)
    }
}

export default new LessonRepository()