const db = require('../../../dbModels');

class CountryRepository {
  
  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.Country.findAll({
      attributes: [ 'id', 'name'],
      include: [
        {
          model: db.Region,
          as: 'regions',
          attributes: [ 'id', 'name' ],
          include: [{
            model: db.City,
            as: 'cities',
            attributes: [ 'id', 'name' ]
          }]
        },
      ],
    });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.Country.findAll(options);
  }
}

module.exports = new CountryRepository();
