const db = require('../../../dbModels');

class DepartmentRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Department.findAll({
      attributes: [ 'id', 'name', 'phone' ],
      include: [
        {
          model: db.Faculty,
          as: 'faculty',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.User,
          as: 'user',
          attributes: [ 'id', 'login' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of department that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Department.findByPk(id, {
      attributes: [ 'id', 'name', 'phone' ],
      include: [
        {
          model: db.Faculty,
          as: 'faculty',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.User,
          as: 'user',
          attributes: [ 'id', 'login' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} department - body of department that will be created
   * @return {Promise} promise with result of create
   */
  async create(department) {
    return await db.Department.create(department);
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of department that will be updated
   * @param {Object} department - body of department that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, department) {
    return await db.Department.update(department, { where: { id } });
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of department that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Department.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Department.findAll(options);
  }
}

module.exports = new DepartmentRepository();