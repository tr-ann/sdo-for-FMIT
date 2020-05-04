const db = require('../../../dbModels');

class StaffRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll(pagination) {
    return await db.Staff.findAll({
      attributes: [ 'id', 'rate', 'min', 'max', 'note' ],
      include: [
        {
          model: db.Teacher,
          as: 'teacher',
        }
      ],
			limit: pagination.limit,
			offset: pagination.offset
    });
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of staff that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Staff.findByPk(id, {
      attributes: [ 'id', 'rate', 'min', 'max', 'note' ],
      include: [
        {
          model: db.Teacher,
          as: 'teacher',
        }
      ],
    });
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} staff - body of staff that will be created
   * @return {Promise} promise with result of create
   */
  async create(staff) {
    return await db.Staff.create(staff);
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of staff that will be updated
   * @param {Object} staff - body of staff that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, staff) {
    return await db.Staff.update(staff, { where: { id } });
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of staff that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Staff.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Staff.findAll(options);
  }
}

module.exports = new StaffRepository();