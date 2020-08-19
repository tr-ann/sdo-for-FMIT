const db = require('../../../dbModels');

class GroupRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Group.findAll({
      attributes: [ 'id', 'number' ],
      include: [
        {
          model: db.Faculty,
          as: 'faculty',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Specialty,
          as: 'specialty',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.StudyMode,
          as: 'studyMode',
          attributes: [ 'id', 'name' ],
        },
      ],
    })
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of group that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Group.findByPk(id, {
      attributes: [ 'id', 'number' ],
      include: [
        {
          model: db.Faculty,
          as: 'faculty',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Specialty,
          as: 'specialty',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.StudyMode,
          as: 'studyMode',
          attributes: [ 'id', 'name' ],
        },
        {
          model: db.Student,
          as: 'students',
          attributes: [ 'id', 'fullName', 'recordBook' ]
        }
      ],
    })
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} group - body of group that will be created
   * @return {Promise} promise with result of create
   */
  async create(group) {
    return await db.Group.create(group)
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of group that will be updated
   * @param {Object} group - body of group that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, group) {
    return await db.Group.update(group, { where: { id } });
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of group that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Group.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Group.findAll(options);
  }
}

module.exports = new GroupRepository();