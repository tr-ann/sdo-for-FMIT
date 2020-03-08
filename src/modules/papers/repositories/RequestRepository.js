const db = require('../../../dbModels');

class RequestRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} request - body of request that will be created
   * @return {Promise} promise with result of create
   */
  async create(request) {
      return await db.Request.create(request)
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of request that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {        
    return await db.Request.findByPk(id, {
      attributes: [ 'id', 'topic', 'name', 'createDate', 'updateDate', 'description' ],
      include: [
        {
          model: db.Student,
          as: 'student',
          attributes: [ 'id', 'shortName' ],
        },
        {
          model: db.Teacher,
          as: 'teacher',
          attributes: [ 'id', 'shortName' ],
        },
        {
          model: db.Status,
          as: 'status',
          attributes: [ 'id', 'name' ],
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
    return await db.Request.findAll({
      attributes: [ 'id', 'topic', 'name', 'createDate', 'updateDate', 'description' ],
      include: [
        {
          model: db.Student,
          as: 'student',
          attributes: [ 'id', 'shortName' ],
        },
        {
          model: db.Teacher,
          as: 'teacher',
          attributes: [ 'id', 'shortName' ],
        },
        {
          model: db.Status,
          as: 'status',
          attributes: [ 'id', 'name' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of request that will be updated
   * @param {Object} request - body of request that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, request) {
    return await db.Request.update(request, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of request that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Request.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Request.findAll(options);
  }
}

module.exports = new RequestRepository();