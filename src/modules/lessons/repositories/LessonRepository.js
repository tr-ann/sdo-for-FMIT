const db = require('../../../dbModels');

class LessonRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} lesson - body of lesson that will be created
   * @return {Promise} promise with result of create
   */
  async create(lesson) {
      return await db.Lesson.create(lesson);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of lesson that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Lesson.findByPk(id, {
      attributes: [
        'id',
        'weekDay',
        'groupId',
        'subgroupId',
        'teacherId',
        'lessonTypeId',
        'lectureRoomId',
        'disciplineId',
        'lessonNumberId',
      ],
    });
  }

  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Lesson.findAll({
      attributes: [ 'id', 'weekDay' ],
      include: [
        {
          model: db.Group,
          as: 'group',
          attributes: [ 'number' ],
        },
        {
          model: db.Subgroup,
          as: 'subgroup',
          attributes: [ 'name' ],
        },
        {
          model: db.Teacher,
          as: 'teacher',
          attributes: [ 'shortName' ],
        },
        {
          model: db.LessonType,
          as: 'lessonType',
          attributes: [ 'name' ],
        },
        {
          model: db.LectureRoom,
          as: 'room',
          attributes: [ 'number' ],
        },
        {
          model: db.Discipline,
          as: 'discipline',
          attributes: [ 'shortName' ],
        },
        {
          model: db.LessonNumber,
          as: 'lessonNumber',
          attributes: [ 'number' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of lesson that will be updated
   * @param {Object} lesson - body of lesson that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, lesson) {
    return await db.Lesson.update(lesson, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of lesson that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Lesson.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Lesson.findAll(options);
  }
}

module.exports = new LessonRepository();