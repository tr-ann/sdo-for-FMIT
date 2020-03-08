const db = require('../../../dbModels');

class SubgroupRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Subgroup.findAll({
      attributes: [ 'id', 'name' ],
      include: [
        {
          model: db.Group,
          as: 'group',
          attributes: [ 'id', 'number' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of subgroup that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.Subgroup.findByPk(id, {
      attributes: [ 'id', 'name' ],
      include: [
        {
          model: db.Group,
          as: 'group',
          attributes: [ 'id', 'number' ],
        },
      ],
    });
  }

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} subgroup - body of subgroup that will be created
   * @return {Promise} promise with result of create
   */
  async create(subgroup) {
      return await db.Subgroup.create(subgroup);
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of subgroup that will be updated
   * @param {Object} subgroup - body of subgroup that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, subgroup) {
      return await db.Subgroup.update(subgroup, { where: { id } });
  }
  
  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of subgroup that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.Subgroup.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Subgroup.findAll(options);
  }
}

module.exports = new SubgroupRepository();