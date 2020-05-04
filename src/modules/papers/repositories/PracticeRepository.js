const db = require('../../../dbModels');

class PracticeRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} practice - body of practice that will be created
   * @return {Promise} promise with result of create
   */
  async create(practice) {
    return await db.Practice.create(practice);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of practice that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Practice.findByPk(id, {
      attributes: [ 'id', 'topic', 'name', 'startDate', 'endDate', 'description' ],
      include: [
        {
          model: db.Student,
          as: 'student',
          attributes: [ 'id', 'shortName' ],
        },
        {
          model: db.Organization,
          as: 'organization',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Status,
          as: 'status',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.PracticeType,
          as: 'practiceType',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Resource,
          as: 'resource',
          attributes: [ 'id' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Practice.findAll({
      attributes: [ 'id', 'topic', 'name', 'startDate', 'endDate', 'description' ],
      include: [
        {
          model: db.Student,
          as: 'student',
          attributes: [ 'id', 'shortName' ],
        },
        {
          model: db.Organization,
          as: 'organization',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Status,
          as: 'status',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.PracticeType,
          as: 'practiceType',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Resource,
          as: 'resource',
          attributes: [ 'id' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of practice that will be updated
   * @param {Object} practice - body of practice that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, practice) {
    return await db.Practice.update(practice, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of practice that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Practice.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Practice.findAll(options);
  }
}

module.exports = new PracticeRepository();