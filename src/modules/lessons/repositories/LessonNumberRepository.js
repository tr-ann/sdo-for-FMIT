const db = require('../../../dbModels');

class LessonNumberRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} lessonNumber - body of lesson number that will be created
   * @return {Promise} promise with result of create
   */
  async create(lessonNumber) {
    return await db.LessonNumber.create(lessonNumber);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of lesson number that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {        
    return await db.LessonNumber.findByPk(id, {
      attributes: [ 'id', 'number', 'startTime1', 'endTime1', 'startTime2', 'endTime2' ],
    });
  }

  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.LessonNumber.findAll({
      attributes: [ 'id', 'number', 'startTime1', 'endTime1', 'startTime2', 'endTime2' ],
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of lesson number that will be updated
   * @param {Object} lessonNumber - body of lesson number that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, lessonNumber) {
    return await db.LessonNumber.update(lessonNumber, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of lesson number that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.LessonNumber.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.LessonNumber.findAll(options);
  }
}

module.exports = new LessonNumberRepository();