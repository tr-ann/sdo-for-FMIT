const db = require('../../../dbModels');

class DisciplineRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll(pagination) {
    return await db.Discipline.findAll({
      attributes: [ 'id', 'subject', 'course', 'semester', 'form', 'timeSheet', 'eng' ],
      include: [
        {
          model: db.Specialty,
          as: 'specialty',
        }
      ],
			limit: pagination.limit,
			offset: pagination.offset
    });
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of discipline that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Discipline.findByPk(id, {
      attributes: [ 'id', 'subject', 'course', 'semester', 'form', 'timeSheet', 'eng' ],
      include: [
        {
          model: db.Specialty,
          as: 'specialty',
        }
      ],
    });
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} discipline - body of discipline that will be created
   * @return {Promise} promise with result of create
   */
  async create(discipline) {
    return await db.Discipline.create(discipline);
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of discipline that will be updated
   * @param {Object} discipline - body of discipline that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, discipline) {
    return await db.Discipline.update(discipline, { where: { id } });
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of discipline that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Discipline.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Discipline.findAll(options);
  }
}

module.exports = new DisciplineRepository();