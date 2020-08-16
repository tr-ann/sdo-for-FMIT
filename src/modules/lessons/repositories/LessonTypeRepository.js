const db = require('../../../dbModels');

class LessonTypeRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} lessonType - body of lesson type that will be created
   * @return {Promise} promise with result of create
   */
  async create(lessonType) {
    return await db.LessonType.create(lessonType);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of lesson type that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {        
    return await db.LessonType.findByPk(id, {
      attributes: [ 'id', 'name' ],
    });
  }

  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.LessonType.findAll({
      attributes: [ 'id', 'name' ],
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of lesson type that will be updated
   * @param {Object} lessonType - body of lesson type that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, lessonType) {
    return await db.LessonType.update(lessonType, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of lesson type that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.LessonType.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.LessonType.findAll(options);
  }
}

module.exports = new LessonTypeRepository();