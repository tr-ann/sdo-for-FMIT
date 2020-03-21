const db = require('../../../dbModels');

class FacultyRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Faculty.findAll({
      attributes: ['id', 'name', 'shortName'],
      include: [
        {
          model: db.InfoFaculty,
          as: 'infoFaculty',
          attributes: [ 'id', 'description' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of faculty that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Faculty.findByPk(id,{
      attributes: ['id', 'name', 'shortName'],
      include: [
        {
          model: db.InfoFaculty,
          as: 'infoFaculty',
          attributes: [ 'id', 'description', 'phone' ],
        },
        {
          model: db.Group,
          attributes: [ 'id', 'number' ],
          as: 'groups',
          include: [
            {
              model: db.Specialty,
              attributes: [ 'id', 'code', 'shortName' ],
              as: 'specialty'
            },
            {
              model: db.StudyMode,
              attributes: [ 'id', 'name' ],
              as: 'studyMode'
            }
          ]
        }
      ],
    });
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} faculty - body of faculty that will be created
   * @return {Promise} promise with result of create
   */
  async create(faculty, options) {
    return await db.Faculty.create(faculty, options);
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of faculty that will be updated
   * @param {Object} faculty - body of faculty that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, faculty, options) {
    return await db.Faculty.update(faculty, { where: { id } }, options);
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of faculty that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Faculty.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Faculty.findAll(options);
  }
}

module.exports = new FacultyRepository();