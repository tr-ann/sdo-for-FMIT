const db = require('../../../dbModels');

class GraduationPaperRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} graduationPaper - body of graduation paper that will be created
   * @return {Promise} promise with result of create
   */
  async create(graduationPaper) {
    return await db.GraduationPaper.create(graduationPaper);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of graduation paper that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {        
    return await db.GraduationPaper.findByPk(id, {
      attributes: [ 'id', 'topic', 'name', 'description' ],
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
    return await db.GraduationPaper.findAll({
      attributes: [ 'id', 'topic', 'name', 'description' ],
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
   * @param {Number} id - id of graduation paper that will be updated
   * @param {Object} graduationPaper - body of graduation paper that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, graduationPaper) {
    return await db.GraduationPaper.update(graduationPaper, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of graduation paper that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.GraduationPaper.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.GraduationPaper.findAll(options);
  }
}

module.exports = new GraduationPaperRepository();