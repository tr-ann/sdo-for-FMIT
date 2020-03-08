const db = require('../../../dbModels');

class PracticeTypeRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} practiceType - body of practice type that will be created
   * @return {Promise} promise with result of create
   */
  async create(practiceType) {
    return await db.PracticeType.create(practiceType);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of practice type that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.PracticeType.findByPk(id, {
      attributes: [ 'id', 'name' ],
    });
  }

  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.PracticeType.findAll({
      attributes: [ 'id', 'name' ],
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of practice type that will be updated
   * @param {Object} practiceType - body of practice type that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, practiceType) {
    return await db.PracticeType.update(practiceType, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of practice type that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.PracticeType.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.PracticeType.findAll(options);
  }
}

module.exports = new PracticeTypeRepository();