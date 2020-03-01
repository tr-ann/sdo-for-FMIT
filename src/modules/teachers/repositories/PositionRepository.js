const db = require('../../../dbModels');

class PositionRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} position - body of academic degree that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(position) {
		return await db.position.create(position);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} id - id of academic degree that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {        
		return await db.position.findByPk(id, {
			attributes: [ 'id', 'name' ],
		});
	}

	/**
	 * Read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.position.findAll({
			attributes: [ 'id', 'name' ],
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of academic degree that will be updated
	 * @param {Object} position - body of academic degree that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, position) {
		return await db.position.update(position, {where: { id: id }});
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of academic degree that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.position.destroy({where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async getAll(options) {
		return await db.position.findAll(options);
	}

	/**
	 * Reads entity by description from a database
	 * 
	 * @param {Object} options - description to read entity
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.position.findOne(options);
	}
}

module.exports = new PositionRepository();